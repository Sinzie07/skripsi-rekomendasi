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
  const [isToast, setIsToast] = useState(false);

  const [user, setUser] = useState("");

  const handleInputChange = (event) => {
    setUser(event.target.value);
  };

  const storeUserLocal = () => {
    localStorage.setItem("user", user);
  };

  useEffect(() => {
    console.log(alternative);
  }, [alternative]);

  const Toast = () => {
    return (
      <div className={`toast-container ${isToast ? "active" : ""}`}>
        <div className="toast">
          <button
            onClick={() => {
              setIsToast(false);
            }}
            className="toast-btn-dismiss"
          >
            X
          </button>
          <div className="toast-info-container">
            <p className="warning-text">Warning</p>
            <p className="toast-info-text">All Question Must Be Filled !!</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="rekomendasi-page">
        {isToast ? <Toast /> : null}
        <h1 className="title-getrekomen">Get Recommendation</h1>

        <div className="container">
          <div className="form">
            <p>
              Answer all the question to get your recommendation. Don't Forget
              to read all the question, and notes on the form below.
            </p>
            <label htmlFox="questionName">Your Name:</label>
            <div className="pertanyaan-nama">
              <input
                type="text"
                name="questionName"
                value={user}
                onChange={handleInputChange}
              />
            </div>
            <label htmlFox="question1">
              {" "}
              What is your score in IF 433 Object Oriented Programming course?
            </label>
            <div className="radio-jawaban">
              <div className="radio-button-jawaban">
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
              <div className="radio-button-jawaban">
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
              <div className="radio-button-jawaban">
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
              <div className="radio-button-jawaban">
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
              <div className="radio-button-jawaban">
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
            <label htmlFox="question2">
              {" "}
              What is your score in IF 230 Algorithm and Data Structure course?
            </label>
            <div className="radio-jawaban">
              <div className="radio-button-jawaban">
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
              <div className="radio-button-jawaban">
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
              <div className="radio-button-jawaban">
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
              <div className="radio-button-jawaban">
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
              <div className="radio-button-jawaban">
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
            <label htmlFox="question3">
              {" "}
              What is your score in IF 432 Algorithm Design and Analysis course?
            </label>
            <div className="radio-jawaban">
              <div className="radio-button-jawaban">
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
              <div className="radio-button-jawaban">
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
              <div className="radio-button-jawaban">
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
              <div className="radio-button-jawaban">
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
              <div className="radio-button-jawaban">
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

            <label htmlFox="question4">
              {" "}
              What is your score in IF470 Computer Security course?
            </label>
            <div className="radio-jawaban">
              <div className="radio-button-jawaban">
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
              <div className="radio-button-jawaban">
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
              <div className="radio-button-jawaban">
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
              <div className="radio-button-jawaban">
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
              <div className="radio-button-jawaban">
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

            <p className="notes">
              <h3>NOTES!</h3>
              Here are the value for the options below:
              <ul>
                <li>1 = Very Not Interested</li>
                <li>2 = Not Intersted</li>
                <li>3 = Normal</li>
                <li>4 = Interested</li>
                <li>5 = Very Interested</li>
              </ul>
            </p>
            <div className="question-wrapper">
              <label htmlFor="question 5">
                {" "}
                How interested are you in 3D Game Design and Development
                courses?
              </label>
              <div className="radio-wrapper">
                <div>
                  <input
                    type="radio"
                    name="question5"
                    value="1"
                    onChange={(event) => {
                      setGame3d(event.target.value);
                    }}
                  />
                  <label htmlFor="1">Very Not Interested</label>
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
                  <label htmlFor="2">Not Interested</label>
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
                  <label htmlFor="3">Normal</label>
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
                  <label htmlFor="4">Interested</label>
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
                  <label htmlFor="5">Very Interested</label>
                </div>
              </div>
            </div>
            <div className="question-wrapper">
              <label htmlFor="question 6">
                {" "}
                How interested are you in AR VR Game Design and Development
                courses?
              </label>
              <div className="radio-wrapper">
                <div>
                  <input
                    type="radio"
                    name="question6"
                    value="1"
                    onChange={(event) => {
                      setGameARVR(event.target.value);
                    }}
                  />
                  <label htmlFor="1">Very Not Interested</label>
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
                  <label htmlFor="2">Not Interested</label>
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
                  <label htmlFor="3">Normal</label>
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
                  <label htmlFor="4">Interested</label>
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
                  <label htmlFor="5">Very Interested</label>
                </div>
              </div>
            </div>
            <div className="question-wrapper">
              <label htmlFor="question 7">
                {" "}
                How interested are you in Cross Platform Mobile Programming
                course?
              </label>
              <div className="radio-wrapper">
                <div>
                  <input
                    type="radio"
                    name="question7"
                    value="1"
                    onChange={(event) => {
                      setCross(event.target.value);
                    }}
                  />
                  <label htmlFor="1">Very Not Interested</label>
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
                  <label htmlFor="2">Not Interested</label>
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
                  <label htmlFor="3">Normal</label>
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
                  <label htmlFor="4">Interested</label>
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
                  <label htmlFor="5">Very Interested</label>
                </div>
              </div>
            </div>
            <div className="question-wrapper">
              <label htmlFor="question 8">
                {" "}
                How interested are you in Blockchain and Cryptocurrency course?
              </label>
              <div className="radio-wrapper">
                <div>
                  <input
                    type="radio"
                    name="question8"
                    value="1"
                    onChange={(event) => {
                      setBlockchain(event.target.value);
                    }}
                  />
                  <label htmlFor="1">Very Not Interested</label>
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
                  <label htmlFor="2">Not Interested</label>
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
                  <label htmlFor="3">Normal</label>
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
                  <label htmlFor="4">Interested</label>
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
                  <label htmlFor="5">Very Interested</label>
                </div>
              </div>
            </div>
            <div className="question-wrapper">
              <label htmlFor="question 9">
                {" "}
                How interested are you in Cybersecurity: Firewall Configuration
                and Management course?
              </label>
              <div className="radio-wrapper">
                <div>
                  <input
                    type="radio"
                    name="question9"
                    value="1"
                    onChange={(event) => {
                      setCyberFirewall(event.target.value);
                    }}
                  />
                  <label htmlFor="1">Very Not Interested</label>
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
                  <label htmlFor="2">Not Interested</label>
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
                  <label htmlFor="3">Normal</label>
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
                  <label htmlFor="4">Interested</label>
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
                  <label htmlFor="5">Very Interested</label>
                </div>
              </div>
            </div>
            <div className="question-wrapper">
              <label htmlFor="question 10">
                {" "}
                How interested are you in Cybersecurity: Cloud Security and
                Security Operation course?
              </label>
              <div className="radio-wrapper">
                <div>
                  <input
                    type="radio"
                    name="question10"
                    value="1"
                    onChange={(event) => {
                      setCyberCloud(event.target.value);
                    }}
                  />
                  <label htmlFor="1">Very Not Interested</label>
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
                  <label htmlFor="2">Not Interested</label>
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
                  <label htmlFor="3">Normal</label>
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
                  <label htmlFor="4">Interested</label>
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
                  <label htmlFor="5">Very Interested</label>
                </div>
              </div>
            </div>
            <div className="question-wrapper">
              <label htmlFor="question 5">
                {" "}
                How interested are you in Computer and Society course?
              </label>
              <div className="radio-wrapper">
                <div>
                  <input
                    type="radio"
                    name="question11"
                    value="1"
                    onChange={(event) => {
                      setCompas(event.target.value);
                    }}
                  />
                  <label htmlFor="1">Very Not Interested</label>
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
                  <label htmlFor="2">Not Interested</label>
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
                  <label htmlFor="3">Normal</label>
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
                  <label htmlFor="4">Interested</label>
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
                  <label htmlFor="5">Very Interested</label>
                </div>
              </div>
            </div>
            <div className="question-wrapper">
              <label htmlFor="question 12">
                {" "}
                How interested are you in Multimedia Concept course?
              </label>
              <div className="radio-wrapper">
                <div>
                  <input
                    type="radio"
                    name="question12"
                    value="1"
                    onChange={(event) => {
                      setMultimedia(event.target.value);
                    }}
                  />
                  <label htmlFor="1">Very Not Interested</label>
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
                  <label htmlFor="2">Not Interested</label>
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
                  <label htmlFor="3">Normal</label>
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
                  <label htmlFor="4">Interested</label>
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
                  <label htmlFor="5">Very Interested</label>
                </div>
              </div>
            </div>
            <div className="question-wrapper">
              <label htmlFor="question 13">
                {" "}
                How interested are you in Paralel Processing course?
              </label>
              <div className="radio-wrapper">
                <div>
                  <input
                    type="radio"
                    name="question13"
                    value={1}
                    onChange={(event) => {
                      setParalel(event.target.value);
                    }}
                  />
                  <label htmlFor="1">Very Not Interested</label>
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
                  <label htmlFor="2">Not Interested</label>
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
                  <label htmlFor="3">Normal</label>
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
                  <label htmlFor="4">Interested</label>
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
                  <label htmlFor="5">Very Interested</label>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                if (
                  user === "" ||
                  oop === 0 ||
                  dataStruture === 0 ||
                  algoritma === 0 ||
                  computerSecurity === 0 ||
                  game3d === 0 ||
                  gameARVR === 0 ||
                  cross === 0 ||
                  blockchain === 0 ||
                  cyberFirewall === 0 ||
                  cyberCloud === 0 ||
                  compas === 0 ||
                  multimedia === 0 ||
                  paralel === 0
                ) {
                  setIsToast(true);
                } else {
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
                  storeUserLocal();

                  navigate("/result");
                }
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rekomendasi;
