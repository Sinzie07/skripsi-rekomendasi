import arvr1 from "../../images/arvr1.jpeg";
import arvr2 from "../../images/arvr2.png";
import arvr3 from "../../images/arvr3.jpg";
import "../../assets/pages/details.css";
import { Link } from "react-router-dom";

function resultdetaildua() {
  return (
    <main className="details-page">
      <div className="details-information">
        <h1>Details Peminatan</h1>
        <div className="details-wrapper">
          <div className="details-photo-cards">
            <div
              className="photo-details"
              style={{ backgroundImage: `url(${arvr2})` }}
            >
              {""}
            </div>
            <div className="details-cards-title">
              <h1>ARVR Game Design and Development</h1>
            </div>
            <div className="details-cards-content">
              <h2>Description:</h2>
              <p>
                This course discusses the process of making a digital game in
                3-dimensional form by utilizing tools related to making game
                development such as smartphones to create Virtual Reality games
                or Augmented Reality games and also learning how to make games
                using procedural content generation methods by utilizing Unity
                Software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default resultdetaildua;
