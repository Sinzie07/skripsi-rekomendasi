import mobile1 from "../../images/mobile1.jpg";
import "../../assets/pages/details.css";

function resultdetailtujuh() {
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
              style={{ backgroundImage: `url(${mobile1})` }}
            >
              {""}
            </div>
            <div className="details-cards-title">
              <h1>Cross Platform Mobile Programming</h1>
            </div>
            <div className="details-cards-content">
              <h2>Description:</h2>
              <p>
                Cross-Platform Mobile Programming discusses how to buld a hybrid
                mobile app using various web technologies that can run on
                Android and iOS platform using the same codebase. Students will
                also learn how to build mobile applications that can access
                native device features, such as cameras, sensors, geolocation,
                and access cloud-based databases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default resultdetailtujuh;
