import React from "react";
import tridi from "../../images/3d1.jpg";
import "../../assets/pages/contoh.css";
import Navbar from "../global/Navbar";
import { Link } from "react-router-dom";
import Footer from "../global/Footer";
import arvr from "../../images/arvr1.jpeg";
import paralel from "../../images/paralel1.jpg";
import grid from "../../images/grid.png";
function Page() {
  return (
    <div className="contoh-detatils-page">
      <Navbar />

      <div className="contoh-container">
        <div className="contoh-konten">
          <div className="contoh-description">
            <h1>3D Game Design & Development</h1>
            <p>
              This course discusses the process of making a digital game in
              3-dimensional form, starting from the process of designing
              elements in a game and using three-dimensional assets from 3D
              software, to the process of implementing and programming a digital
              game in three-dimensional form. Before entering into the process
              of designing elements in a game, students will be taught the
              concept of elements in a game.
            </p>
            <h2>Difficulty:</h2>
            <div className="contoh-stars">★★★</div>
            <h2 className="contoh-prospek">Prospect Work</h2>
            <div className="contoh-card-container">
              <div className="contoh-card">
                <h2> 3D Game Developer</h2>
              </div>
              <div className="contoh-card">
                <h2>Game Artist</h2>
              </div>
              <div className="contoh-card">
                <h2>Game Tester</h2>
              </div>
            </div>
          </div>
          <div className="contoh-image">
            <img src={tridi}></img>
          </div>
        </div>
        <div className="contoh-details-navigation">
          <Link to="/detailtridi">
            <button className="contoh-details-navigation-backbutton">
              <img src={paralel} alt="Back" />
              <p className="back-text">Back</p>
            </button>
          </Link>
          <Link to="/information">
            <button className="contoh-details-navigation-infobutton">
              <img src={grid} alt="Information" />
              <p>Information</p>
            </button>
          </Link>
          <Link to="/detailblockchain">
            <button className="contoh-details-navigation-nextbutton">
              <img src={arvr} alt="Next" />
              <p className="next-text">Next</p>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
