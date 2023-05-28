import firewall1 from "../../images/firewall1.png";
import firewall2 from "../../images/firewall2.png";
import firewall3 from "../../images/firewall3.png";
import firewall4 from "../../images/firewall4.png";
import Footer from "../global/Footer";
import grid from "../../images/grid.png";
import society from "../../images/computersociety1.jpg";
import mobile from "../../images/mobile1.jpg";
import "../../assets/pages/details.css";
import { Link } from "react-router-dom";
import Navbar from "../global/Navbar";
import Detailcard from "./DetailsCard";

function Detailenam() {
  return (
    <div className="detatils-page">
      <Navbar />

      <div className="details-container">
        <div className="details-konten">
          <div className="details-description">
            <h1>Cybersecurity: Firewall Configuration and Management</h1>
            <p>
              This course provides students with a general understanding of how
              to install, configure, and manage firewalls for network
              architecture defense. Students will learn theory and configuration
              steps for setting up security, networking, threat prevention,
              logging, and reporting features of firewall technology. Students
              will also learn the theory and advanced configuration features
              needed to set up traffic handling, advanced content / user
              identification, quality of service, global protection, monitoring
              / reporting, and high availability using firewall technology.
            </p>
            <h2>Difficulty:</h2>
            <div className="details-stars">★★★</div>
            <h2 className="details-prospek">Prospect Work</h2>
            <div className="cards_container">
              <div className="cards_wrapper">
                <ul className="cards_items">
                  <Detailcard src={firewall2} text="Security Engineer" />
                  <Detailcard src={firewall3} text="Auditor Security" />
                  <Detailcard src={firewall4} text="Penetration Tester" />
                </ul>
              </div>
            </div>
          </div>
          <div className="details-image">
            <img src={firewall1}></img>
          </div>
        </div>
        <div className="details-navigation">
          <Link to="/detailsociety">
            <button className="details-navigation-backbutton">
              <img src={society} alt="Back" />
              <p className="back-text">Back</p>
            </button>
          </Link>
          <Link to="/information">
            <button className="details-navigation-infobutton">
              <img src={grid} alt="Information" />
              <p>Information</p>
            </button>
          </Link>
          <Link to="/detailmobile">
            <button className="details-navigation-nextbutton">
              <img src={mobile} alt="Next" />
              <p className="next-text">Next</p>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Detailenam;
