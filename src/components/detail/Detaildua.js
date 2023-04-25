import arvr from "../../images/arvrgame.png";
import "../../assets/pages/details.css";
import { Link } from "react-router-dom";
import Navbar from "../global/Navbar";

function Detaildua() {
  return (
    <main className="details-page">
      <Navbar />
      <div className="details-information">
        <h1>Details Peminatan</h1>
        <div className="details-wrapper">
          <div className="details-photo-cards">
            <div className="details-navigation">
              <Link to="/detailtridi">
                <button className="details-navigation-backbutton">Back</button>
              </Link>
              <Link to="/detailblockchain">
                <button className="details-navigation-nextbutton">Next</button>
              </Link>
            </div>
            <div
              className="photo-details"
              style={{ backgroundImage: `url(${arvr})` }}
            >
              {""}
            </div>
            <div className="details-cards-title">
              <h1>ARVR Game Design and Development</h1>
            </div>
            <div className="details-cards-content">
              <h2>Difficulty:</h2>
              <div className="stars">★★★</div>
              <h2>Description:</h2>
              <p>
                This course discusses the process of making a digital game in
                3-dimensional form by utilizing tools related to making game
                development such as smartphones to create Virtual Reality games
                or Augmented Reality games and also learning how to make games
                using procedural content generation methods by utilizing Unity
                Software.
              </p>
              <h2>Prospect Career</h2>
              <ul>
                <li>Game Designer</li>
                <li>Game Developer</li>
                <li>Game Tester</li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Detaildua;
