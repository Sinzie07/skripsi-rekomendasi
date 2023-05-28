import React from "react";
import tridi from "../../images/3d2.jpeg";
import "../../assets/pages/details.css";
import Navbar from "../global/Navbar";
import { Link } from "react-router-dom";
import Footer from "../global/Footer";
import arvr from "../../images/arvr2.png";
import paralel from "../../images/paralel1.jpg";
import grid from "../../images/grid.png";
import tridi1 from "../../images/3d1.jpg";
import tridi2 from "../../images/3d3.jpg";
import tridi3 from "../../images/3d4.jpg";
import Detailcard from "./DetailsCard";

function Detailsatu() {
  return (
    <div className="detatils-page">
      <Navbar />

      <div className="details-container">
        <div className="details-konten">
          <div className="details-description">
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
            <div className="details-stars">★★★</div>
            <h2 className="details-prospek">Prospect Work</h2>
            <div className="cards_container">
              <div className="cards_wrapper">
                <ul className="cards_items">
                  <Detailcard src={tridi1} text="3D Game Developer" />
                  <Detailcard src={tridi2} text="Game Artist" />
                  <Detailcard src={tridi3} text="Game Tester" />
                </ul>
              </div>
            </div>
          </div>
          <div className="details-image">
            <img src={tridi}></img>
          </div>
        </div>
        <div className="details-navigation">
          <Link to="/detailparalel">
            <button className="details-navigation-backbutton">
              <img src={paralel} alt="Back" />
              <p className="back-text">Back</p>
            </button>
          </Link>
          <Link to="/information">
            <button className="details-navigation-infobutton">
              <img src={grid} alt="Information" />
              <p>Information</p>
            </button>
          </Link>
          <Link to="/detailarvr">
            <button className="details-navigation-nextbutton">
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

export default Detailsatu;
