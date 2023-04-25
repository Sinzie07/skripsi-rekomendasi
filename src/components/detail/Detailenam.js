import firewall from "../../images/firewall.jpg";
import "../../assets/pages/details.css";
import { Link } from "react-router-dom";
import Navbar from "../global/Navbar";

function Detailenam() {
  return (
    <main className="details-page">
      <Navbar />
      <div className="details-information">
        <h1>Details Peminatan</h1>
        <div className="details-wrapper">
          <div className="details-photo-cards">
            <div className="details-navigation">
              <Link to="/detailsociety">
                <button className="details-navigation-backbutton">Back</button>
              </Link>
              <Link to="/detailmobile">
                <button className="details-navigation-nextbutton">Next</button>
              </Link>
            </div>
            <div
              className="photo-details"
              style={{ backgroundImage: `url(${firewall})` }}
            >
              {""}
            </div>
            <div className="details-cards-title">
              <h1>Cybersecurity: Firewall Configuration and Management</h1>
            </div>
            <div className="details-cards-content">
              <h2>Difficulty:</h2>
              <div className="stars">★★★</div>
              <h2>Description:</h2>
              <p>
                This course provides students with a general understanding of
                how to install, configure, and manage firewalls for network
                architecture defense. Students will learn theory and
                configuration steps for setting up security, networking, threat
                prevention, logging, and reporting features of firewall
                technology. Students will also learn the theory and advanced
                configuration features needed to set up traffic handling,
                advanced content / user identification, quality of service,
                global protection, monitoring / reporting, and high availability
                using firewall technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Detailenam;
