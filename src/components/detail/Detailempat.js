import cloudsecurity1 from "../../images/cloudsecurity1.jpg";
import cloudsecurity2 from "../../images/cloudsecurity2.jpg";
import cloudsecurity3 from "../../images/cloudsecurity3.jpg";
import cloudsecurity4 from "../../images/cloudsecurity4.jpg";
import grid from "../../images/grid.png";
import blockchain from "../../images/blockchain2.jpg";
import computersociety from "../../images/computersociety1.jpg";
import Footer from "../global/Footer";
import "../../assets/pages/details.css";
import { Link } from "react-router-dom";
import Navbar from "../global/Navbar";
import Detailcard from "./DetailsCard";

function Detailempat() {
  return (
    <div className="detatils-page">
      <div className="details-container">
        <div className="details-konten">
          <div className="details-description">
            <h1>Cloud Security and Security Operation</h1>
            <p>
              This course provides the sudent basic principles associated with
              securing the cloud and SaaS-based applications through Secure
              Access Service Edge architecture and identify concepts required to
              recognize and potentially mitigate attacks against traditional and
              hybrid datacenters as well as mission critical infrastructure.
              Students will also learn how to initially setup and configure
              containers on a Docker bridge network and thest the container
              security through the use of vulnerability scans and reports. This
              course also provides the student with an understanding of Security
              operations SecOps and the role it plays in protecting our digital
              way of life, for businesses and customers. Students will learn
              continuous improvement processes to collect high-fidelity
              intelligence, contextual data, and automated prevention workflows
              that quickly identify and respond to fast-evolving threats. They
              will also learn how to leverage automation to reduce strain on
              analysts and execute the Security Operation Center's mission to
              identify, ivestigate, and mitigate threats.
            </p>
            <h2>Difficulty:</h2>
            <div className="details-stars">★★★</div>
            <h2 className="details-prospek">Prospect Work</h2>
            <div className="cards_container">
              <div className="cards_wrapper">
                <ul className="cards_items">
                  <Detailcard src={cloudsecurity1} text="Cloud Engineer" />
                  <Detailcard src={cloudsecurity3} text="Security Architect" />
                  <Detailcard
                    src={cloudsecurity4}
                    text="Chief Information Security Officer"
                  />
                </ul>
              </div>
            </div>
          </div>
          <div className="details-image">
            <img src={cloudsecurity2}></img>
          </div>
        </div>
        <div className="details-navigation">
          <Link to="/detailblockchain">
            <button className="details-navigation-backbutton">
              <img src={blockchain} alt="Back" />
              <p className="back-text">Back</p>
            </button>
          </Link>
          <Link to="/information">
            <button className="details-navigation-infobutton">
              <img src={grid} alt="Information" />
              <p>Information</p>
            </button>
          </Link>
          <Link to="/detailsociety">
            <button className="details-navigation-nextbutton">
              <img src={computersociety} alt="Next" />
              <p className="next-text">Next</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Detailempat;
