import Navbar from "../components/global/Navbar";
import { useState } from "react";
import "../../src/assets/pages/rekomendasi.css";

const Rekomendasi = () => {
  const [answers, setAnswers] = useState({
    question1: null,
    question2: null,
    question3: null,
    question4: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnswers({ ...answers, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(answers);
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div>
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
              onChange={handleChange}
            />
            <label htmlFor="1">C</label>
          </div>
          <div>
            <input
              type="radio"
              name="question1"
              value="2"
              onChange={handleChange}
            />
            <label htmlFor="2">B</label>
          </div>
          <div>
            <input
              type="radio"
              name="question1"
              value="3"
              onChange={handleChange}
            />
            <label htmlFor="3">B+</label>
          </div>
          <div>
            <input
              type="radio"
              name="question1"
              value="4"
              onChange={handleChange}
            />
            <label htmlFor="4">A-</label>
          </div>
          <div>
            <input
              type="radio"
              name="question1"
              value="5"
              onChange={handleChange}
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
              onChange={handleChange}
            />
            <label htmlFor="1">C</label>
          </div>
          <div>
            <input
              type="radio"
              name="question2"
              value="2"
              onChange={handleChange}
            />
            <label htmlFor="2">B</label>
          </div>
          <div>
            <input
              type="radio"
              name="question2"
              value="3"
              onChange={handleChange}
            />
            <label htmlFor="3">B+</label>
          </div>
          <div>
            <input
              type="radio"
              name="question2"
              value="4"
              onChange={handleChange}
            />
            <label htmlFor="4">A-</label>
          </div>
          <div>
            <input
              type="radio"
              name="question2"
              value="5"
              onChange={handleChange}
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
              onChange={handleChange}
            />
            <label htmlFor="1">C</label>
          </div>
          <div>
            <input
              type="radio"
              name="question3"
              value="2"
              onChange={handleChange}
            />
            <label htmlFor="2">B</label>
          </div>
          <div>
            <input
              type="radio"
              name="question3"
              value="3"
              onChange={handleChange}
            />
            <label htmlFor="3">B+</label>
          </div>
          <div>
            <input
              type="radio"
              name="question3"
              value="4"
              onChange={handleChange}
            />
            <label htmlFor="4">A-</label>
          </div>
          <div>
            <input
              type="radio"
              name="question3"
              value="5"
              onChange={handleChange}
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
              onChange={handleChange}
            />
            <label htmlFor="1">C</label>
          </div>
          <div>
            <input
              type="radio"
              name="question4"
              value="2"
              onChange={handleChange}
            />
            <label htmlFor="2">B</label>
          </div>
          <div>
            <input
              type="radio"
              name="question4"
              value="3"
              onChange={handleChange}
            />
            <label htmlFor="3">B+</label>
          </div>
          <div>
            <input
              type="radio"
              name="question4"
              value="4"
              onChange={handleChange}
            />
            <label htmlFor="4">A-</label>
          </div>
          <div>
            <input
              type="radio"
              name="question4"
              value="5"
              onChange={handleChange}
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
              onChange={handleChange}
            />
            <label htmlFor="1">1</label>
          </div>
          <div>
            <input
              type="radio"
              name="question5"
              value="2"
              onChange={handleChange}
            />
            <label htmlFor="2">2</label>
          </div>
          <div>
            <input
              type="radio"
              name="question5"
              value="3"
              onChange={handleChange}
            />
            <label htmlFor="3">3</label>
          </div>
          <div>
            <input
              type="radio"
              name="question5"
              value="4"
              onChange={handleChange}
            />
            <label htmlFor="4">4</label>
          </div>
          <div>
            <input
              type="radio"
              name="question5"
              value="5"
              onChange={handleChange}
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
              onChange={handleChange}
            />
            <label htmlFor="1">1</label>
          </div>
          <div>
            <input
              type="radio"
              name="question6"
              value="2"
              onChange={handleChange}
            />
            <label htmlFor="2">2</label>
          </div>
          <div>
            <input
              type="radio"
              name="question6"
              value="3"
              onChange={handleChange}
            />
            <label htmlFor="3">3</label>
          </div>
          <div>
            <input
              type="radio"
              name="question6"
              value="4"
              onChange={handleChange}
            />
            <label htmlFor="4">4</label>
          </div>
          <div>
            <input
              type="radio"
              name="question6"
              value="5"
              onChange={handleChange}
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
              onChange={handleChange}
            />
            <label htmlFor="1">1</label>
          </div>
          <div>
            <input
              type="radio"
              name="question7"
              value="2"
              onChange={handleChange}
            />
            <label htmlFor="2">2</label>
          </div>
          <div>
            <input
              type="radio"
              name="question7"
              value="3"
              onChange={handleChange}
            />
            <label htmlFor="3">3</label>
          </div>
          <div>
            <input
              type="radio"
              name="question7"
              value="4"
              onChange={handleChange}
            />
            <label htmlFor="4">4</label>
          </div>
          <div>
            <input
              type="radio"
              name="question7"
              value="5"
              onChange={handleChange}
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
              onChange={handleChange}
            />
            <label htmlFor="1">1</label>
          </div>
          <div>
            <input
              type="radio"
              name="question8"
              value="2"
              onChange={handleChange}
            />
            <label htmlFor="2">2</label>
          </div>
          <div>
            <input
              type="radio"
              name="question8"
              value="3"
              onChange={handleChange}
            />
            <label htmlFor="3">3</label>
          </div>
          <div>
            <input
              type="radio"
              name="question8"
              value="4"
              onChange={handleChange}
            />
            <label htmlFor="4">4</label>
          </div>
          <div>
            <input
              type="radio"
              name="question8"
              value="5"
              onChange={handleChange}
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
              onChange={handleChange}
            />
            <label htmlFor="1">1</label>
          </div>
          <div>
            <input
              type="radio"
              name="question9"
              value="2"
              onChange={handleChange}
            />
            <label htmlFor="2">2</label>
          </div>
          <div>
            <input
              type="radio"
              name="question9"
              value="3"
              onChange={handleChange}
            />
            <label htmlFor="3">3</label>
          </div>
          <div>
            <input
              type="radio"
              name="question9"
              value="4"
              onChange={handleChange}
            />
            <label htmlFor="4">4</label>
          </div>
          <div>
            <input
              type="radio"
              name="question9"
              value="5"
              onChange={handleChange}
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
              onChange={handleChange}
            />
            <label htmlFor="1">1</label>
          </div>
          <div>
            <input
              type="radio"
              name="question10"
              value="2"
              onChange={handleChange}
            />
            <label htmlFor="2">2</label>
          </div>
          <div>
            <input
              type="radio"
              name="question10"
              value="3"
              onChange={handleChange}
            />
            <label htmlFor="3">3</label>
          </div>
          <div>
            <input
              type="radio"
              name="question10"
              value="4"
              onChange={handleChange}
            />
            <label htmlFor="4">4</label>
          </div>
          <div>
            <input
              type="radio"
              name="question10"
              value="5"
              onChange={handleChange}
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
              onChange={handleChange}
            />
            <label htmlFor="1">1</label>
          </div>
          <div>
            <input
              type="radio"
              name="question11"
              value="2"
              onChange={handleChange}
            />
            <label htmlFor="2">2</label>
          </div>
          <div>
            <input
              type="radio"
              name="question11"
              value="3"
              onChange={handleChange}
            />
            <label htmlFor="3">3</label>
          </div>
          <div>
            <input
              type="radio"
              name="question11"
              value="4"
              onChange={handleChange}
            />
            <label htmlFor="4">4</label>
          </div>
          <div>
            <input
              type="radio"
              name="question11"
              value="5"
              onChange={handleChange}
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
              onChange={handleChange}
            />
            <label htmlFor="1">1</label>
          </div>
          <div>
            <input
              type="radio"
              name="question12"
              value="2"
              onChange={handleChange}
            />
            <label htmlFor="2">2</label>
          </div>
          <div>
            <input
              type="radio"
              name="question12"
              value="3"
              onChange={handleChange}
            />
            <label htmlFor="3">3</label>
          </div>
          <div>
            <input
              type="radio"
              name="question12"
              value="4"
              onChange={handleChange}
            />
            <label htmlFor="4">4</label>
          </div>
          <div>
            <input
              type="radio"
              name="question12"
              value="5"
              onChange={handleChange}
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
              value="1"
              onChange={handleChange}
            />
            <label htmlFor="1">1</label>
          </div>
          <div>
            <input
              type="radio"
              name="question13"
              value="2"
              onChange={handleChange}
            />
            <label htmlFor="2">2</label>
          </div>
          <div>
            <input
              type="radio"
              name="question13"
              value="3"
              onChange={handleChange}
            />
            <label htmlFor="3">3</label>
          </div>
          <div>
            <input
              type="radio"
              name="question13"
              value="4"
              onChange={handleChange}
            />
            <label htmlFor="4">4</label>
          </div>
          <div>
            <input
              type="radio"
              name="question13"
              value="5"
              onChange={handleChange}
            />
            <label htmlFor="5">5</label>
          </div>
        </div>
      </form>
    </>
  );
  return (
    <main className="rekomendasi-page">
      <div>
        <h1>Get Rekomendasi</h1>
      </div>
      <div className="form-container">
        <div className="form-content">
          <div className="form-input"></div>
        </div>
      </div>
    </main>
  );
};

export default Rekomendasi;
