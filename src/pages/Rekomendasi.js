import Navbar from "../components/global/Navbar";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "../../src/assets/pages/rekomendasi.css";
import { AlternativeContext } from "../context/AlternativeContext";

const Rekomendasi = () => {
  const { alternative, setAlternativeData } = useContext(AlternativeContext);
  const navigate = useNavigate();

  const [answers, setAnswers] = useState({
    oop: 0,
    data_structure: 0,
    algoritma: 0,
    computer_security: 0,
    game3d: 0,
    gamearvr: 0,
    cross: 0,
    blockchain: 0,
    cyber_firewall: 0,
    cyber_cloud: 0,
    compas: 0,
    multimedia: 0,
    paralel: 0,
  });

  const [oop, setOOP] = useState(0);
  const [dataStruture, setDataStructure] = useState(0);
  const [algoritma, setAlgoritma] = useState(0);
  const [computerSecurity, setComputerSecurity] = useState(0);
  const [game3d, setGame3d] = useState(0);
  const [gameARVR, setGameARVR] = useState(0);
  const [cross, setCross] = useState(0);
  const [blockchain, setBlockchain] = useState(0);
  const [cyberFirewall, setCyberFirewall] = useState(0);
  const [cyberCloud, setCyberCloud] = useState(0);
  const [compas, setCompas] = useState(0);
  const [multimedia, setMultimedia] = useState(0);
  const [paralel, setParalel] = useState(0);

  useEffect(() => {
    console.log(alternative);
  }, [alternative]);

  return (
    <>
      <Navbar />
      <div>
        <h1 className="title-getrekomen">Get Rekomendasi</h1>
      </div>
      <div>
        <div>
          <label htmlFox="questionName">Nama Anda:</label>
          <div className="pertanyaan-nama">
            <input type="text" name="questionName" />
          </div>
          <label htmlFox="question1">
            {" "}
            Berapakah nilai anda dalam mata kuliah IF 433 Object Oriented
            Programming?
          </label>
          <div>
            <input
              type="radio"
              name="question1"
              value="1"
              onChange={(event) => {
                setOOP(event.target.value);
              }}
            />
            <label htmlFor="1">C</label>
          </div>
          <div>
            <input
              type="radio"
              name="question1"
              value="2"
              onChange={(event) => {
                setOOP(event.target.value);
              }}
            />
            <label htmlFor="2">B</label>
          </div>
          <div>
            <input
              type="radio"
              name="question1"
              value="3"
              onChange={(event) => {
                setOOP(event.target.value);
              }}
            />
            <label htmlFor="3">B+</label>
          </div>
          <div>
            <input
              type="radio"
              name="question1"
              value="4"
              onChange={(event) => {
                setOOP(event.target.value);
              }}
            />
            <label htmlFor="4">A-</label>
          </div>
          <div>
            <input
              type="radio"
              name="question1"
              value="5"
              onChange={(event) => {
                setOOP(event.target.value);
              }}
            />
            <label htmlFor="5">A</label>
          </div>
        </div>

        <div>
          <label htmlFox="question2">
            {" "}
            Berapakah nilai anda dalam mata kuliah IF 230 Algorithm and Data
            Structure?
          </label>
          <div>
            <input
              type="radio"
              name="question2"
              value="1"
              onChange={(event) => {
                setDataStructure(event.target.value);
              }}
            />
            <label htmlFor="1">C</label>
          </div>
          <div>
            <input
              type="radio"
              name="question2"
              value="2"
              onChange={(event) => {
                setDataStructure(event.target.value);
              }}
            />
            <label htmlFor="2">B</label>
          </div>
          <div>
            <input
              type="radio"
              name="question2"
              value="3"
              onChange={(event) => {
                setDataStructure(event.target.value);
              }}
            />
            <label htmlFor="3">B+</label>
          </div>
          <div>
            <input
              type="radio"
              name="question2"
              value="4"
              onChange={(event) => {
                setDataStructure(event.target.value);
              }}
            />
            <label htmlFor="4">A-</label>
          </div>
          <div>
            <input
              type="radio"
              name="question2"
              value="5"
              onChange={(event) => {
                setDataStructure(event.target.value);
              }}
            />
            <label htmlFor="5">A</label>
          </div>
        </div>

        <div>
          <label htmlFox="question3">
            {" "}
            Berapakah nilai anda dalam mata kuliah IF 432 Algorithm Design and
            Analysis?
          </label>
          <div>
            <input
              type="radio"
              name="question3"
              value="1"
              onChange={(event) => {
                setAlgoritma(event.target.value);
              }}
            />
            <label htmlFor="1">C</label>
          </div>
          <div>
            <input
              type="radio"
              name="question3"
              value="2"
              onChange={(event) => {
                setAlgoritma(event.target.value);
              }}
            />
            <label htmlFor="2">B</label>
          </div>
          <div>
            <input
              type="radio"
              name="question3"
              value="3"
              onChange={(event) => {
                setAlgoritma(event.target.value);
              }}
            />
            <label htmlFor="3">B+</label>
          </div>
          <div>
            <input
              type="radio"
              name="question3"
              value="4"
              onChange={(event) => {
                setAlgoritma(event.target.value);
              }}
            />
            <label htmlFor="4">A-</label>
          </div>
          <div>
            <input
              type="radio"
              name="question3"
              value="5"
              onChange={(event) => {
                setAlgoritma(event.target.value);
              }}
            />
            <label htmlFor="5">A</label>
          </div>
        </div>

        <div>
          <label htmlFox="question4">
            {" "}
            Berapakah nilai anda dalam mata kuliah IF470 Computer Security?
          </label>
          <div>
            <input
              type="radio"
              name="question4"
              value="1"
              onChange={(event) => {
                setComputerSecurity(event.target.value);
              }}
            />
            <label htmlFor="1">C</label>
          </div>
          <div>
            <input
              type="radio"
              name="question4"
              value="2"
              onChange={(event) => {
                setComputerSecurity(event.target.value);
              }}
            />
            <label htmlFor="2">B</label>
          </div>
          <div>
            <input
              type="radio"
              name="question4"
              value="3"
              onChange={(event) => {
                setComputerSecurity(event.target.value);
              }}
            />
            <label htmlFor="3">B+</label>
          </div>
          <div>
            <input
              type="radio"
              name="question4"
              value="4"
              onChange={(event) => {
                setComputerSecurity(event.target.value);
              }}
            />
            <label htmlFor="4">A-</label>
          </div>
          <div>
            <input
              type="radio"
              name="question4"
              value="5"
              onChange={(event) => {
                setComputerSecurity(event.target.value);
              }}
            />
            <label htmlFor="5">A</label>
          </div>
        </div>

        <div>
          <label htmlFor="question 5">
            {" "}
            Berapakah nilai Minat terhadap Mata Kuliah Peminatan 3D Game Design
            and Development?
          </label>
          <div>
            <input
              type="radio"
              name="question5"
              value="1"
              onChange={(event) => {
                setGame3d(event.target.value);
              }}
            />
            <label htmlFor="1">1</label>
          </div>
          <div>
            <input
              type="radio"
              name="question5"
              value="2"
              onChange={(event) => {
                setGame3d(event.target.value);
              }}
            />
            <label htmlFor="2">2</label>
          </div>
          <div>
            <input
              type="radio"
              name="question5"
              value="3"
              onChange={(event) => {
                setGame3d(event.target.value);
              }}
            />
            <label htmlFor="3">3</label>
          </div>
          <div>
            <input
              type="radio"
              name="question5"
              value="4"
              onChange={(event) => {
                setGame3d(event.target.value);
              }}
            />
            <label htmlFor="4">4</label>
          </div>
          <div>
            <input
              type="radio"
              name="question5"
              value="5"
              onChange={(event) => {
                setGame3d(event.target.value);
              }}
            />
            <label htmlFor="5">5</label>
          </div>
        </div>

        <div>
          <label htmlFor="question 6">
            {" "}
            Berapakah nilai Minat terhadap Mata Kuliah Peminatan AR VR Game
            Design and Development
          </label>
          <div>
            <input
              type="radio"
              name="question6"
              value="1"
              onChange={(event) => {
                setGameARVR(event.target.value);
              }}
            />
            <label htmlFor="1">1</label>
          </div>
          <div>
            <input
              type="radio"
              name="question6"
              value="2"
              onChange={(event) => {
                setGameARVR(event.target.value);
              }}
            />
            <label htmlFor="2">2</label>
          </div>
          <div>
            <input
              type="radio"
              name="question6"
              value="3"
              onChange={(event) => {
                setGameARVR(event.target.value);
              }}
            />
            <label htmlFor="3">3</label>
          </div>
          <div>
            <input
              type="radio"
              name="question6"
              value="4"
              onChange={(event) => {
                setGameARVR(event.target.value);
              }}
            />
            <label htmlFor="4">4</label>
          </div>
          <div>
            <input
              type="radio"
              name="question6"
              value="5"
              onChange={(event) => {
                setGameARVR(event.target.value);
              }}
            />
            <label htmlFor="5">5</label>
          </div>
        </div>

        <div>
          <label htmlFor="question 7">
            {" "}
            Berapakah nilai Minat terhadap Mata Kuliah Peminatan Cross Platform
            Mobile Programming?
          </label>
          <div>
            <input
              type="radio"
              name="question7"
              value="1"
              onChange={(event) => {
                setCross(event.target.value);
              }}
            />
            <label htmlFor="1">1</label>
          </div>
          <div>
            <input
              type="radio"
              name="question7"
              value="2"
              onChange={(event) => {
                setCross(event.target.value);
              }}
            />
            <label htmlFor="2">2</label>
          </div>
          <div>
            <input
              type="radio"
              name="question7"
              value="3"
              onChange={(event) => {
                setCross(event.target.value);
              }}
            />
            <label htmlFor="3">3</label>
          </div>
          <div>
            <input
              type="radio"
              name="question7"
              value="4"
              onChange={(event) => {
                setCross(event.target.value);
              }}
            />
            <label htmlFor="4">4</label>
          </div>
          <div>
            <input
              type="radio"
              name="question7"
              value="5"
              onChange={(event) => {
                setCross(event.target.value);
              }}
            />
            <label htmlFor="5">5</label>
          </div>
        </div>

        <div>
          <label htmlFor="question 8">
            {" "}
            Berapakah nilai Minat terhadap Mata Kuliah Peminatan Blockchain and
            Cryptocurrency?
          </label>
          <div>
            <input
              type="radio"
              name="question8"
              value="1"
              onChange={(event) => {
                setBlockchain(event.target.value);
              }}
            />
            <label htmlFor="1">1</label>
          </div>
          <div>
            <input
              type="radio"
              name="question8"
              value="2"
              onChange={(event) => {
                setBlockchain(event.target.value);
              }}
            />
            <label htmlFor="2">2</label>
          </div>
          <div>
            <input
              type="radio"
              name="question8"
              value="3"
              onChange={(event) => {
                setBlockchain(event.target.value);
              }}
            />
            <label htmlFor="3">3</label>
          </div>
          <div>
            <input
              type="radio"
              name="question8"
              value="4"
              onChange={(event) => {
                setBlockchain(event.target.value);
              }}
            />
            <label htmlFor="4">4</label>
          </div>
          <div>
            <input
              type="radio"
              name="question8"
              value="5"
              onChange={(event) => {
                setBlockchain(event.target.value);
              }}
            />
            <label htmlFor="5">5</label>
          </div>
        </div>

        <div>
          <label htmlFor="question 9">
            {" "}
            Berapakah nilai Minat terhadap Mata Kuliah Peminatan Cybersecurity:
            Firewall Configuration and Management?
          </label>
          <div>
            <input
              type="radio"
              name="question9"
              value="1"
              onChange={(event) => {
                setCyberFirewall(event.target.value);
              }}
            />
            <label htmlFor="1">1</label>
          </div>
          <div>
            <input
              type="radio"
              name="question9"
              value="2"
              onChange={(event) => {
                setCyberFirewall(event.target.value);
              }}
            />
            <label htmlFor="2">2</label>
          </div>
          <div>
            <input
              type="radio"
              name="question9"
              value="3"
              onChange={(event) => {
                setCyberFirewall(event.target.value);
              }}
            />
            <label htmlFor="3">3</label>
          </div>
          <div>
            <input
              type="radio"
              name="question9"
              value="4"
              onChange={(event) => {
                setCyberFirewall(event.target.value);
              }}
            />
            <label htmlFor="4">4</label>
          </div>
          <div>
            <input
              type="radio"
              name="question9"
              value="5"
              onChange={(event) => {
                setCyberFirewall(event.target.value);
              }}
            />
            <label htmlFor="5">5</label>
          </div>
        </div>

        <div>
          <label htmlFor="question 10">
            {" "}
            Berapakah nilai Minat terhadap Mata Kuliah Peminatan Cybersecurity:
            Cloud Security and Security Operation?
          </label>
          <div>
            <input
              type="radio"
              name="question10"
              value="1"
              onChange={(event) => {
                setCyberCloud(event.target.value);
              }}
            />
            <label htmlFor="1">1</label>
          </div>
          <div>
            <input
              type="radio"
              name="question10"
              value="2"
              onChange={(event) => {
                setCyberCloud(event.target.value);
              }}
            />
            <label htmlFor="2">2</label>
          </div>
          <div>
            <input
              type="radio"
              name="question10"
              value="3"
              onChange={(event) => {
                setCyberCloud(event.target.value);
              }}
            />
            <label htmlFor="3">3</label>
          </div>
          <div>
            <input
              type="radio"
              name="question10"
              value="4"
              onChange={(event) => {
                setCyberCloud(event.target.value);
              }}
            />
            <label htmlFor="4">4</label>
          </div>
          <div>
            <input
              type="radio"
              name="question10"
              value="5"
              onChange={(event) => {
                setCyberCloud(event.target.value);
              }}
            />
            <label htmlFor="5">5</label>
          </div>
        </div>

        <div>
          <label htmlFor="question 5">
            {" "}
            Berapakah nilai Minat terhadap Mata Kuliah Peminatan Computer and
            Society?
          </label>
          <div>
            <input
              type="radio"
              name="question11"
              value="1"
              onChange={(event) => {
                setCompas(event.target.value);
              }}
            />
            <label htmlFor="1">1</label>
          </div>
          <div>
            <input
              type="radio"
              name="question11"
              value="2"
              onChange={(event) => {
                setCompas(event.target.value);
              }}
            />
            <label htmlFor="2">2</label>
          </div>
          <div>
            <input
              type="radio"
              name="question11"
              value="3"
              onChange={(event) => {
                setCompas(event.target.value);
              }}
            />
            <label htmlFor="3">3</label>
          </div>
          <div>
            <input
              type="radio"
              name="question11"
              value="4"
              onChange={(event) => {
                setCompas(event.target.value);
              }}
            />
            <label htmlFor="4">4</label>
          </div>
          <div>
            <input
              type="radio"
              name="question11"
              value="5"
              onChange={(event) => {
                setCompas(event.target.value);
              }}
            />
            <label htmlFor="5">5</label>
          </div>
        </div>

        <div>
          <label htmlFor="question 12">
            {" "}
            Berapakah nilai Minat terhadap Mata Kuliah Peminatan Multimedia
            Concept?
          </label>
          <div>
            <input
              type="radio"
              name="question12"
              value="1"
              onChange={(event) => {
                setMultimedia(event.target.value);
              }}
            />
            <label htmlFor="1">1</label>
          </div>
          <div>
            <input
              type="radio"
              name="question12"
              value="2"
              onChange={(event) => {
                setMultimedia(event.target.value);
              }}
            />
            <label htmlFor="2">2</label>
          </div>
          <div>
            <input
              type="radio"
              name="question12"
              value="3"
              onChange={(event) => {
                setMultimedia(event.target.value);
              }}
            />
            <label htmlFor="3">3</label>
          </div>
          <div>
            <input
              type="radio"
              name="question12"
              value="4"
              onChange={(event) => {
                setMultimedia(event.target.value);
              }}
            />
            <label htmlFor="4">4</label>
          </div>
          <div>
            <input
              type="radio"
              name="question12"
              value="5"
              onChange={(event) => {
                setMultimedia(event.target.value);
              }}
            />
            <label htmlFor="5">5</label>
          </div>
        </div>

        <div>
          <label htmlFor="question 13">
            {" "}
            Berapakah nilai Minat terhadap Mata Kuliah Peminatan Paralel
            Processing?
          </label>
          <div>
            <input
              type="radio"
              name="question13"
              value={1}
              onChange={(event) => {
                setParalel(event.target.value);
              }}
            />
            <label htmlFor="1">1</label>
          </div>
          <div>
            <input
              type="radio"
              name="question13"
              value={2}
              onChange={(event) => {
                setParalel(event.target.value);
              }}
            />
            <label htmlFor="2">2</label>
          </div>
          <div>
            <input
              type="radio"
              name="question13"
              value={3}
              onChange={(event) => {
                setParalel(event.target.value);
              }}
            />
            <label htmlFor="3">3</label>
          </div>
          <div>
            <input
              type="radio"
              name="question13"
              value={4}
              onChange={(event) => {
                setParalel(event.target.value);
              }}
            />
            <label htmlFor="4">4</label>
          </div>
          <div>
            <input
              type="radio"
              name="question13"
              value={5}
              onChange={(event) => {
                setParalel(event.target.value);
              }}
            />
            <label htmlFor="5">5</label>
          </div>
        </div>
        <button
          onClick={() => {
            setAlternativeData(
              oop,
              dataStruture,
              algoritma,
              computerSecurity,
              cross,
              blockchain,
              game3d,
              gameARVR,
              compas,
              multimedia,
              paralel,
              cyberFirewall,
              cyberCloud
            );

            navigate("/result");
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Rekomendasi;
