import arvr from "../../images/arvrgame.png";
import "../../assets/pages/details.css";

function Detaildua() {
  return (
    <main className="details-page">
      <a href="/information" className="back-button">
        Back
      </a>
      <div className="details-information">
        <h1>Details Peminatan</h1>
        <div className="details-wrapper">
          <div className="details-photo-cards">
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

export default Detaildua;
