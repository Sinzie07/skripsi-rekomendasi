import tridigame1 from "../../images/3d1.jpg";
import tridigame2 from "../../images/3d2.jpeg";
import tridigame3 from "../../images/3d3.jpg";
import "../../assets/pages/details.css";

function resultdetailsatu() {
  return (
    <main className="details-page">
      <div className="details-information">
        <h1>Details Peminatan</h1>
        <div className="details-wrapper">
          <div className="details-photo-cards">
            <div
              className="photo-details"
              style={{ backgroundImage: `url(${tridigame1})` }}
            >
              {""}
            </div>
            <div className="details-cards-title">
              <h1>3D Game Design and Development</h1>
            </div>

            <div className="details-cards-content">
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default resultdetailsatu;
