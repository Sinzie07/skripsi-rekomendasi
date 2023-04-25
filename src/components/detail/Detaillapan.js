import konmul from "../../images/multimediaconcept.jpg";
import "../../assets/pages/details.css";
import { Link } from "react-router-dom";
import Navbar from "../global/Navbar";

function Detaillapan() {
  return (
    <main className="details-page">
      <Navbar />
      <div className="details-information">
        <h1>Details Peminatan</h1>
        <div className="details-wrapper">
          <div className="details-photo-cards">
            <div className="details-navigation">
              <Link to="/detailmobile">
                <button className="details-navigation-backbutton">Back</button>
              </Link>
              <Link to="/detailparalel">
                <button className="details-navigation-nextbutton">Next</button>
              </Link>
            </div>
            <div
              className="photo-details"
              style={{ backgroundImage: `url(${konmul})` }}
            >
              {""}
            </div>
            <div className="details-cards-title">
              <h1>Multimedia Concept</h1>
            </div>
            <div className="details-cards-content">
              <h2>Difficulty:</h2>
              <div className="stars">★★★</div>
              <h2>Description:</h2>
              <p>
                Multimedia concept teaches student the basic understanding of
                the concept of using multimedia elements, and their processing
                in the real world. This course teaches various terms,
                definitions, technical meanings, and techniques for using
                multimedia elements consisting of text, image, audio, video, and
                animation. In addition, students are also taught to complete a
                multimedia project in te form of collaborative interactive
                multimedia applications. The technique of using multimedia
                elements and making interactive multimedia projects is done
                using the Visual Scratch programming language as a multimedia
                authoring tool.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Detaillapan;
