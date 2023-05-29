import mobile1 from "../../images/mobile1.jpg";
import mobile2 from "../../images/mobile2.png";
import mobile3 from "../../images/mobile3.png";
import mobile4 from "../../images/mobile4.jpg";
import "../../assets/pages/details.css";
import Footer from "../global/Footer";
import firewall from "../../images/firewall1.png";
import multimedia from "../../images/multimedia1.jpg";
import grid from "../../images/grid.png";
import { Link } from "react-router-dom";
import Navbar from "../global/Navbar";
import Detailcard from "./DetailsCard";

function Detailtujuh() {
  return (
    <div className="detatils-page">
      <div className="details-container">
        <div className="details-konten">
          <div className="details-description">
            <h1>Cross Platform Mobile Programming</h1>
            <p>
              Cross-Platform Mobile Programming discusses how to buld a hybrid
              mobile app using various web technologies that can run on Android
              and iOS platform using the same codebase. Students will also learn
              how to build mobile applications that can access native device
              features, such as cameras, sensors, geolocation, and access
              cloud-based databases.
            </p>
            <h2>Difficulty:</h2>
            <div className="details-stars">★★★</div>
            <h2 className="details-prospek">Prospect Work</h2>
            <div className="cards_container">
              <div className="cards_wrapper">
                <ul className="cards_items">
                  <Detailcard src={mobile2} text="Mobile App Developer" />
                  <Detailcard src={mobile3} text="UI / UX Designer" />
                  <Detailcard src={mobile4} text="Software Tester" />
                </ul>
              </div>
            </div>
          </div>
          <div className="details-image">
            <img src={mobile1}></img>
          </div>
        </div>
        <div className="details-navigation">
          <Link to="/detailfirewall">
            <button className="details-navigation-backbutton">
              <img src={firewall} alt="Back" />
              <p className="back-text">Back</p>
            </button>
          </Link>
          <Link to="/information">
            <button className="details-navigation-infobutton">
              <img src={grid} alt="Information" />
              <p>Information</p>
            </button>
          </Link>
          <Link to="/detailmultimedia">
            <button className="details-navigation-nextbutton">
              <img src={multimedia} alt="Next" />
              <p className="next-text">Next</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Detailtujuh;
