import "../../src/assets/pages/information.css";
import tridigame from "../images/3d2.jpeg";
import arvr from "../images/arvr1.jpeg";
import blockchain from "../images/blockchain2.jpg";
import cloudsecurity from "../images/cloudsecurity1.jpg";
import computersociety from "../images/computersociety1.jpg";
import firewall from "../images/firewall1.png";
import mobileprogramming from "../images/mobile1.jpg";
import multimediaconcept from "../images/multimedia1.jpg";
import paralelprocessing from "../images/paralel1.jpg";
import { Link } from "react-router-dom";

const Information = () => {
  return (
    <main className="information-page">
      <div className="content-information">
        <h1>Information</h1>
        <h2>Choose Your Specialization Courses</h2>
        <h3>
          There are several specialization courses available at UMN. Each course
          has its strengths in its field. You can choose one of the
          specializations below to find out more details.
        </h3>
      </div>
      <div className="info-peminatan-wrappers">
        <Link to="/detailtridi">
          <div className="peminatan-photo-cards">
            <div
              className="photo-peminatan"
              style={{ backgroundImage: `url(${tridigame})` }}
            >
              {""}
            </div>
            <div className="peminatan-photo-cards-title">
              <h3>3D Games</h3>
            </div>
          </div>
        </Link>

        <Link to="/detailarvr">
          <div className="peminatan-photo-cards">
            <div
              className="photo-peminatan"
              style={{ backgroundImage: `url(${arvr})` }}
            >
              {""}
            </div>
            <div className="peminatan-photo-cards-title">
              <h3>ARVR Games</h3>
            </div>
          </div>
        </Link>

        <Link to="/detailblockchain">
          <div className="peminatan-photo-cards">
            <div
              className="photo-peminatan"
              style={{ backgroundImage: `url(${blockchain})` }}
            >
              {""}
            </div>
            <div className="peminatan-photo-cards-title">
              <h3>Blockchain</h3>
            </div>
          </div>
        </Link>

        <Link to="/detailcloudsecurity">
          <div className="peminatan-photo-cards">
            <div
              className="photo-peminatan"
              style={{ backgroundImage: `url(${cloudsecurity})` }}
            >
              {""}
            </div>
            <div className="peminatan-photo-cards-title">
              <h3>Cybersecurity:CloudSecurity</h3>
            </div>
          </div>
        </Link>

        <Link to="/detailsociety">
          <div className="peminatan-photo-cards">
            <div
              className="photo-peminatan"
              style={{ backgroundImage: `url(${computersociety})` }}
            >
              {""}
            </div>
            <div className="peminatan-photo-cards-title">
              <h3>Computer Society</h3>
            </div>
          </div>
        </Link>

        <Link to="/detailfirewall">
          <div className="peminatan-photo-cards">
            <div
              className="photo-peminatan"
              style={{ backgroundImage: `url(${firewall})` }}
            >
              {""}
            </div>
            <div className="peminatan-photo-cards-title">
              <h3>Computer Security Firewall</h3>
            </div>
          </div>
        </Link>

        <Link to="/detailmobile">
          <div className="peminatan-photo-cards">
            <div
              className="photo-peminatan"
              style={{ backgroundImage: `url(${mobileprogramming})` }}
            >
              {""}
            </div>
            <div className="peminatan-photo-cards-title">
              <h3>Mobile Programming</h3>
            </div>
          </div>
        </Link>

        <Link to="/detailmultimedia">
          <div className="peminatan-photo-cards">
            <div
              className="photo-peminatan"
              style={{ backgroundImage: `url(${multimediaconcept})` }}
            >
              {""}
            </div>
            <div className="peminatan-photo-cards-title">
              <h3>Multimedia Concept</h3>
            </div>
          </div>
        </Link>

        <Link to="/detailparalel">
          <div className="peminatan-photo-cards">
            <div
              className="photo-peminatan"
              style={{ backgroundImage: `url(${paralelprocessing})` }}
            >
              {""}
            </div>
            <div className="peminatan-photo-cards-title">
              <h3>Paralel Processing</h3>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Information;
