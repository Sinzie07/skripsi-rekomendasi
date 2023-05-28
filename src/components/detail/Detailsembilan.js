import paralel1 from "../../images/paralel1.jpg";
import paralel2 from "../../images/paralel2.jpg";
import paralel3 from "../../images/paralel3.jpg";
import paralel4 from "../../images/paralel4.jpg";
import multimedia from "../../images/multimedia1.jpg";
import grid from "../../images/grid.png";
import tridi from "../../images/3d2.jpeg";
import Footer from "../global/Footer";
import "../../assets/pages/details.css";
import { Link } from "react-router-dom";
import Navbar from "../global/Navbar";
import Detailcard from "./DetailsCard";

function Detailsembilan() {
  return (
    <div className="detatils-page">
      <Navbar />

      <div className="details-container">
        <div className="details-konten">
          <div className="details-description">
            <h1>Paralel Processing</h1>
            <p>
              This course will teach students about the principles, techniques,
              and technologies involved in parallel computing and processing.
              Parallel processing refers to the execution of multiple tasks or
              instructions simultaneously with the goal of improving performance
              and efficiency in computing system.
            </p>
            <h2>Difficulty:</h2>
            <div className="details-stars">★★★★</div>
            <h2 className="details-prospek">Prospect Work</h2>
            <div className="cards_container">
              <div className="cards_wrapper">
                <ul className="cards_items">
                  <Detailcard src={paralel2} text="Software Engineer" />
                  <Detailcard src={paralel3} text="Parallel Programmer" />
                  <Detailcard src={paralel4} text="Data Scientist" />
                </ul>
              </div>
            </div>
          </div>
          <div className="details-image">
            <img src={paralel1}></img>
          </div>
        </div>
        <div className="details-navigation">
          <Link to="/detailmultimedia">
            <button className="details-navigation-backbutton">
              <img src={multimedia} alt="Back" />
              <p className="back-text">Back</p>
            </button>
          </Link>
          <Link to="/information">
            <button className="details-navigation-infobutton">
              <img src={grid} alt="Information" />
              <p>Information</p>
            </button>
          </Link>
          <Link to="/detailtridi">
            <button className="details-navigation-nextbutton">
              <img src={tridi} alt="Next" />
              <p className="next-text">Next</p>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Detailsembilan;
