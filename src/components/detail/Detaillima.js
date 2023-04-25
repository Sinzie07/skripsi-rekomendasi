import society from "../../images/computersociety.jpg";
import "../../assets/pages/details.css";
import { Link } from "react-router-dom";
import Navbar from "../global/Navbar";

function Detaillima() {
  return (
    <main className="details-page">
      <Navbar />
      <div className="details-information">
        <h1>Details Peminatan</h1>
        <div className="details-wrapper">
          <div className="details-photo-cards">
            <div className="details-navigation">
              <Link to="/detailcloudsecurity">
                <button className="details-navigation-backbutton">Back</button>
              </Link>
              <Link to="/detailfirewall">
                <button className="details-navigation-nextbutton">Next</button>
              </Link>
            </div>
            <div
              className="photo-details"
              style={{ backgroundImage: `url(${society})` }}
            >
              {""}
            </div>
            <div className="details-cards-title">
              <h1>Computer and Society</h1>
            </div>
            <div className="details-cards-content">
              <h2>Difficulty:</h2>
              <div className="stars">★★★</div>
              <h2>Description:</h2>
              <p>
                The rapid development of ICT has changed many activities in our
                lives. For example, in learning, playing, working, communication
                and doing business. Moreover, now social media has also been
                widely used in various ways. In addition to having a positive
                impact, the development of ICT also has a negative impact needs
                to be understood so that the community using ICT can minimize
                its impact. To that end, the Indonesian government has drawn up
                various laws, including the Law of Information and Electronic
                Transactions to regulate the use of ICT in society. As an ICT
                professional, it is not enough just to master the technology but
                also to understand the code ethics to prevent the misuse of ICT,
                both for personal interests and the interests of other parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Detaillima;
