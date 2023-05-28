import konmul1 from "../../images/multimedia1.jpg";
import konmul2 from "../../images/multimedia2.png";
import konmul3 from "../../images/multimedia3.jpeg";
import konmul4 from "../../images/multimedia4.jpg";
import Footer from "../global/Footer";
import mobile from "../../images/mobile1.jpg";
import grid from "../../images/grid.png";
import paralel from "../../images/paralel1.jpg";
import "../../assets/pages/details.css";
import { Link } from "react-router-dom";
import Navbar from "../global/Navbar";
import Detailcard from "./DetailsCard";

function Detaillapan() {
  return (
    <div className="detatils-page">
      <Navbar />

      <div className="details-container">
        <div className="details-konten">
          <div className="details-description">
            <h1>Multimedia Concept</h1>
            <p>
              Multimedia concept teaches student the basic understanding of the
              concept of using multimedia elements, and their processing in the
              real world. This course teaches various terms, definitions,
              technical meanings, and techniques for using multimedia elements
              consisting of text, image, audio, video, and animation. In
              addition, students are also taught to complete a multimedia
              project in te form of collaborative interactive multimedia
              applications. The technique of using multimedia elements and
              making interactive multimedia projects is done using the Visual
              Scratch programming language as a multimedia authoring tool.
            </p>
            <h2>Difficulty:</h2>
            <div className="details-stars">★★★</div>
            <h2 className="details-prospek">Prospect Work</h2>
            <div className="cards_container">
              <div className="cards_wrapper">
                <ul className="cards_items">
                  <Detailcard src={konmul2} text="Website Designer" />
                  <Detailcard src={konmul3} text="Game Modeler" />
                  <Detailcard src={konmul4} text="Ilustrator / Animator" />
                </ul>
              </div>
            </div>
          </div>
          <div className="details-image">
            <img src={konmul1}></img>
          </div>
        </div>
        <div className="details-navigation">
          <Link to="/detailmobile">
            <button className="details-navigation-backbutton">
              <img src={mobile} alt="Back" />
              <p className="back-text">Back</p>
            </button>
          </Link>
          <Link to="/information">
            <button className="details-navigation-infobutton">
              <img src={grid} alt="Information" />
              <p>Information</p>
            </button>
          </Link>
          <Link to="/detailparalel">
            <button className="details-navigation-nextbutton">
              <img src={paralel} alt="Next" />
              <p className="next-text">Next</p>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Detaillapan;
