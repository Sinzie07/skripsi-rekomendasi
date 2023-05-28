import { useContext, useEffect, useState } from "react";
import { AlternativeContext } from "../context/AlternativeContext";
import "../../src/assets/pages/result.css";
import axios from "axios";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import mobile1 from "../images/mobile1.jpg";

const Result = () => {
  const { alternative, setRanking } = useContext(AlternativeContext);
  const [user, setUser] = useState("");

  const storeUser = async () => {
    try {
      setUser(localStorage.getItem("user"));
      if (user !== "") {
        const user_id = await axios.post(
          "https://backend-skripsi-production.up.railway.app/api/user",
          {
            name: user,
          }
        );
        const userID = user_id.data.data._id;
        console.log(userID);
        return userID;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const storeResult = async () => {
    const userID = await storeUser();
    try {
      const id = userID;
      const data = [];
      topThree.slice(0, 3).map((item) => {
        const obj = {
          alternatif: item.title,
          bobot_alternatif: item.ranking,
          user_id: id,
        };

        // setHasil(...hasil, obj);
        data.push(obj);
        console.log(data);

        console.log(userID);
      });
      await axios.post(
        "https://backend-skripsi-production.up.railway.app/api/results",
        data
      );
    } catch (error) {
      console.log(error);
    }
  };

  const bobotAhp = {
    prospek: 0.227628874,
    kesulitan: 0.046848607,
    nilai_sebelum: 0.112745996,
    minat: 0.612776523,
  };

  const matrix_wp = {
    cross: [4, 3, 4, 5],
    blockchain: [5, 3, 4, 4],
    cyber_firewall: [4, 3, 4, 4],
    cyber_cloud: [4, 3, 4, 5],
    game3d: [4, 3, 4, 2],
    gamearvr: [4, 3, 4, 2],
    paralel: [4, 4, 4, 0],
    compas: [4, 3, 4, 4],
    multimedia: [3, 3, 4, 3],
  };

  function hitungnilaiSWP() {
    let hasil = {};
    let total = 0;

    alternative.forEach((item) => {
      const nilai_s =
        Math.pow(item.bobotWP.prospek, bobotAhp.prospek) *
        Math.pow(item.bobotWP.kesulitan, -bobotAhp.kesulitan) *
        Math.pow(item.bobotWP.nilai_sebelum, -bobotAhp.nilai_sebelum) *
        Math.pow(item.bobotWP.minat, bobotAhp.minat);

      total += nilai_s;

      hasil[item.id] = nilai_s;
    });

    // for (const key in matrix_wp) {
    //   const item = matrix_wp[key];

    //   const nilai_s =
    //     Math.pow(item[0], bobotAhp.prospek) *
    //     Math.pow(item[1], -bobotAhp.kesulitan) *
    //     Math.pow(item[2], -bobotAhp.nilai_sebelum) *
    //     Math.pow(item[3], bobotAhp.minat);

    //   total += nilai_s;

    //   hasil[key] = nilai_s;
    // }

    return [hasil, total];
  }

  function hitungRankingWP() {
    let [hasil_s, total_s] = hitungnilaiSWP();
    let ranking = {};

    for (const key in hasil_s) {
      const item = hasil_s[key];

      ranking[key] = item / total_s;
    }

    return ranking;
  }

  const [topThree, setTopThree] = useState([]);

  useEffect(() => {
    const [hasil_s, nilai_s] = hitungnilaiSWP();
    const result = hitungRankingWP();
    setRanking(result);
    setTopThree(alternative.sort((a, b) => b.ranking - a.ranking));
    storeResult();
  }, [alternative, hitungRankingWP, hitungnilaiSWP, user]);

  console.log(alternative);

  return (
    <div className="result-page">
      <Navbar />
      <div className="page-title">
        <h1>RESULTS</h1>
        <h2>
          Based on your responses in the previous form, we have curated a list
          of specialized courses tailored just for you!
        </h2>
      </div>
      <div className="result-container">
        {topThree ? (
          topThree.slice(0, 3).map((item, index) => (
            <div className="result-wrapper">
              <div className="result-rank">{index + 1}</div>
              <div className="result-image">
                <img
                  src={require(`../images/${item?.image}`)}
                  alt="ResultImage"
                />
              </div>
              <p>{item?.image}</p>
            </div>
          ))
        ) : (
          <p>tidak ada data</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Result;
