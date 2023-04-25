import cloudsecurity from "../../images/cloudsecurity.jpg";
import "../../assets/pages/details.css";
import { Link } from "react-router-dom";
import Navbar from "../global/Navbar";

function Detailempat() {
  return (
    <main className="details-page">
      <Navbar />
      <div className="details-information">
        <h1>Details Peminatan</h1>
        <div className="details-wrapper">
          <div className="details-photo-cards">
            <div className="details-navigation">
              <Link to="/detailblockchain">
                <button className="details-navigation-backbutton">Back</button>
              </Link>
              <Link to="/detailsociety">
                <button className="details-navigation-nextbutton">Next</button>
              </Link>
            </div>
            <div
              className="photo-details"
              style={{ backgroundImage: `url(${cloudsecurity})` }}
            >
              {""}
            </div>
            <div className="details-cards-title">
              <h1>Cybersecurity: Cloud Security and Security Operation</h1>
            </div>
            <div className="details-cards-content">
              <h2>Difficulty:</h2>
              <div className="stars">★★★</div>
              <h2>Description:</h2>
              <p>
                This course provides the sudent basic principles associated with
                securing the cloud and SaaS-based applications through Secure
                Access Service Edge architecture and identify concepts required
                to recognize and potentially mitigate attacks against
                traditional and hybrid datacenters as well as mission critical
                infrastructure. Students will also learn how to initially setup
                and configure containers on a Docker bridge network and thest
                the container security through the use of vulnerability scans
                and reports. This course also provides the student with an
                understanding of Security operations SecOps and the role it
                plays in protecting our digital way of life, for businesses and
                customers. Students will learn continuous improvement processes
                to collect high-fidelity intelligence, contextual data, and
                automated prevention workflows that quickly identify and respond
                to fast-evolving threats. They will also learn how to leverage
                automation to reduce strain on analysts and execute the Security
                Operation Center's mission to identify, ivestigate, and mitigate
                threats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Detailempat;
