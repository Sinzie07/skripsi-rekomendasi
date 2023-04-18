import tridigame from "../../images/3dgame.jpg";
import "../../assets/pages/details.css";

function Detailsatu() {
  return (
    <main className="details-page">
      <div className="details-information">
        <h1>Details Peminatan</h1>
        <div className="details-wrapper">
          <div className="details-photo-cards">
            <div
              className="photo-details"
              style={{ backgroundImage: `url(${tridigame})` }}
            >
              {""}
            </div>
            <div className="details-cards-title">
              <h2>3D Games</h2>
            </div>
            <div className="details-cards-content">
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Detailsatu;
