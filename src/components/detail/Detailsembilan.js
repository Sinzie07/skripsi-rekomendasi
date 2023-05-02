import paralel from "../../images/paralelprocessing.png";
import "../../assets/pages/details.css";
import { Link } from "react-router-dom";
import Navbar from "../global/Navbar";

function Detailsembilan() {
  return (
    <main className="details-page">
      <Navbar />
      <div className="details-information">
        <h1>Elective Courses Details</h1>
        <div className="details-wrapper">
          <div className="details-photo-cards">
            <div className="details-navigation">
              <Link to="/detailmultimedia">
                <button className="details-navigation-backbutton">Back</button>
              </Link>
              <Link to="/detailtridi">
                <button className="details-navigation-nextbutton">Next</button>
              </Link>
            </div>
            <div
              className="photo-details"
              style={{ backgroundImage: `url(${paralel})` }}
            >
              {""}
            </div>
            <div className="details-cards-title">
              <h1>Paralel Processing</h1>
            </div>
            <div className="details-cards-content">
              <h2>Difficulty:</h2>
              <div className="stars">★★★★</div>
              <h2>Description:</h2>
              <p>
                This course discusses the process of making a digital game in
                3-dimensional form, starting from the process of designing
                elements in a game and using three-dimensional assets from 3D
                software, to the process of implementing and programming a
                digital game in three-dimensional form. Before entering into the
                process of designing elements in a game, students will be taught
                the concept of elements in a game.
              </p>

              <p className="prospek">
                <h3>Prospect Career</h3>
                <ul>
                  <li>- Software Engineer</li>
                  <li>- Fullstack Developer</li>
                  <li>- Data Scientist</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Detailsembilan;
