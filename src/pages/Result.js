import { useContext, useEffect, useState } from "react";
import { AlternativeContext } from "../context/AlternativeContext";

const Result = () => {
  const { alternative, setRanking } = useContext(AlternativeContext);

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

  const [topThree, setTopThree] = useState();

  useEffect(() => {
    const [hasil_s, nilai_s] = hitungnilaiSWP();
    const result = hitungRankingWP();
    setRanking(result);
    setTopThree(alternative.sort((a, b) => b.ranking - a.ranking));

    console.log(hasil_s);
    console.log(nilai_s);
    console.log(result);
    console.log(alternative);
  }, []);
  console.log(topThree);

  return (
    <main className="result-page">
      <div>
        <h1>Result</h1>
        {topThree
          .map((item, index) => (
            <div>
              <p>{item.title}</p>
              <p>{item.desc}</p>
            </div>
          ))
          .slice(0, 3)}
      </div>
    </main>
  );
};

export default Result;
