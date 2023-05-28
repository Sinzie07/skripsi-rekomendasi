import arvr1 from "../../images/arvr1.jpeg";
import arvr2 from "../../images/arvr2.png";
import arvr3 from "../../images/arvr4.jpg";
import tridi from "../../images/3d2.jpeg";
import Footer from "../global/Footer";
import blockchain from "../../images/blockchain2.jpg";
import grid from "../../images/grid.png";
import "../../assets/pages/details.css";
import { Link } from "react-router-dom";
import Navbar from "../global/Navbar";
import Detailcard from "./DetailsCard";

function Detaildua() {
  return (
    <div className="detatils-page">
      <Navbar />

      <div className="details-container">
        <div className="details-konten">
          <div className="details-description">
            <h1>ARVR Game Design and Development</h1>
            <p>
              This course discusses the process of making a digital game in
              3-dimensional form by utilizing tools related to making game
              development such as smartphones to create Virtual Reality games or
              Augmented Reality games and also learning how to make games using
              procedural content generation methods by utilizing Unity Software.
            </p>
            <h2>Difficulty:</h2>
            <div className="details-stars">★★★</div>
            <h2 className="details-prospek">Prospect Work</h2>
            <div className="cards_container">
              <div className="cards_wrapper">
                <ul className="cards_items">
                  <Detailcard src={arvr1} text="ARVR Graphics Architect" />
                  <Detailcard src={arvr2} text="ARVR Game Developer" />
                  <Detailcard src={arvr3} text="Software Engineer" />
                </ul>
              </div>
            </div>
          </div>
          <div className="details-image">
            <img src={arvr2}></img>
          </div>
        </div>
        <div className="details-navigation">
          <Link to="/detailtridi">
            <button className="details-navigation-backbutton">
              <img src={tridi} alt="Back" />
              <p className="back-text">Back</p>
            </button>
          </Link>
          <Link to="/information">
            <button className="details-navigation-infobutton">
              <img src={grid} alt="Information" />
              <p>Information</p>
            </button>
          </Link>
          <Link to="/detailblockchain">
            <button className="details-navigation-nextbutton">
              <img src={blockchain} alt="Next" />
              <p className="next-text">Next</p>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Detaildua;
