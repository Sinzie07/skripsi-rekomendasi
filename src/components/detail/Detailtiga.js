import blockchain1 from "../../images/blockchain1.jpg";
import blockchain2 from "../../images/blockchain2.jpg";
import blockchain3 from "../../images/blockchain3.jpg";
import blockchain4 from "../../images/blockchain4.jpg";
import arvr from "../../images/arvr2.png";
import grid from "../../images/grid.png";
import cloudsecurity from "../../images/cloudsecurity1.jpg";
import Footer from "../global/Footer";
import "../../assets/pages/details.css";
import { Link } from "react-router-dom";
import Navbar from "../global/Navbar";
import "../../assets/pages/details.css";
import Detailcard from "./DetailsCard";

function Detailtiga() {
  return (
    <div className="detatils-page">
      <div className="details-container">
        <div className="details-konten">
          <div className="details-description">
            <h1>Blockchain and Cryptocurrency</h1>
            <p>
              This course explores the potential use of blockchain technology by
              various stakeholders related to economics and finance. Starting
              with a review of the early application of the technology, Bitcoin
              cryptocurrency, students will gain an understanding of the
              commercial, techncal, and public policy underpinnings of
              blockchain technology, distributed ledgers, and contracts smart
              contracts in open source and pricate applications. The discussion
              covers current blockchain applications with case reviews from
              payment systems to non-fungible tokens.
            </p>
            <h2>Difficulty:</h2>
            <div className="details-stars">★★★</div>
            <h2 className="details-prospek">Prospect Work</h2>
            <div className="cards_container">
              <div className="cards_wrapper">
                <ul className="cards_items">
                  <Detailcard src={blockchain3} text="Blockchain Engineer" />
                  <Detailcard src={blockchain1} text="Blockchain Architect" />
                  <Detailcard src={blockchain4} text="Technical Analyst" />
                </ul>
              </div>
            </div>
          </div>
          <div className="details-image">
            <img src={blockchain2}></img>
          </div>
        </div>
        <div className="details-navigation">
          <Link to="/detailarvr">
            <button className="details-navigation-backbutton">
              <img src={arvr} alt="Back" />
              <p className="back-text">Back</p>
            </button>
          </Link>
          <Link to="/information">
            <button className="details-navigation-infobutton">
              <img src={grid} alt="Information" />
              <p>Information</p>
            </button>
          </Link>
          <Link to="/detailcloudsecurity">
            <button className="details-navigation-nextbutton">
              <img src={cloudsecurity} alt="Next" />
              <p className="next-text">Next</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Detailtiga;
