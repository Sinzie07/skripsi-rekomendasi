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
            Berapakah nilai anda dalam mata kuliah berikut ini?
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
          <label htmlFor="question 2">
            {" "}
            Berapakah nilai Minat terhadap Mata Kuliah Peminatan?
          </label>
          <div>
            <input
              type="radio"
              name="question2"
              value="1"
              onChange={handleChange}
            />
            <label htmlFor="1">1</label>
          </div>
          <div>
            <input
              type="radio"
              name="question2"
              value="2"
              onChange={handleChange}
            />
            <label htmlFor="2">2</label>
          </div>
          <div>
            <input
              type="radio"
              name="question2"
              value="3"
              onChange={handleChange}
            />
            <label htmlFor="3">3</label>
          </div>
          <div>
            <input
              type="radio"
              name="question2"
              value="4"
              onChange={handleChange}
            />
            <label htmlFor="4">4</label>
          </div>
          <div>
            <input
              type="radio"
              name="question2"
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
