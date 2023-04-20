import Navbar from "../components/global/Navbar";
import "../../src/assets/pages/information.css";
import tridigame from "../images/3dgame.jpg";
import arvr from "../images/arvrgame.png";
import blockchain from "../images/blockchain.jpg";
import cloudsecurity from "../images/cloudsecurity.jpg";
import computersociety from "../images/computersociety.jpg";
import firewall from "../images/firewall.jpg";
import mobileprogramming from "../images/mobileprogramming.jpg";
import multimediaconcept from "../images/multimediaconcept.jpg";
import paralelprocessing from "../images/paralelprocessing.png";
import Footer from "../components/global/Footer";
import { Link } from "react-router-dom";

const Information = () => {
  return (
    <main className="information-page">
      <Navbar />
      <div className="content-information">
        <h1>Information</h1>
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
            <div className="peminatan-photo-cards-content">
              <p>Membuat design game 3D dengan menggunakan Unity</p>
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
            <div className="peminatan-photo-cards-content">
              <p>Membuat design game ARVR dengan menggunakan Unity</p>
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
            <div className="peminatan-photo-cards-content">
              <p>Mempelajari Blockchain dan Cryptocurrency</p>
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
            <div className="peminatan-photo-cards-content">
              <p>Mempelajari cloud security</p>
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
            <div className="peminatan-photo-cards-content">
              <p>Mendalami Computer society yang ada dilingkungan</p>
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
            <div className="peminatan-photo-cards-content">
              <p>Mempelajari configurasi firewall yang ada</p>
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
            <div className="peminatan-photo-cards-content">
              <p>
                Mempelajari mobile programming untuk menjadi mobile developer
              </p>
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
            <div className="peminatan-photo-cards-content">
              <p>Belajar mengenai konsep-konsep multimedia yang ada di dunia</p>
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
            <div className="peminatan-photo-cards-content">
              <p>Mempelajari cara sistem mengerjakan 2 task sekaligus</p>
            </div>
          </div>
        </Link>
      </div>
      <Footer />
    </main>
  );
};

export default Information;
