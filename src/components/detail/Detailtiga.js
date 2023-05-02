import blockchain from "../../images/blockchain.jpg";
import "../../assets/pages/details.css";
import { Link } from "react-router-dom";
import Navbar from "../global/Navbar";

function Detailtiga() {
  return (
    <main className="details-page">
      <Navbar />
      <div className="details-information">
        <h1>Elective Courses Details</h1>
        <div className="details-wrapper">
          <div className="details-photo-cards">
            <div className="details-navigation">
              <Link to="/detailarvr">
                <button className="details-navigation-backbutton">Back</button>
              </Link>
              <Link to="/detailcloudsecurity">
                <button className="details-navigation-nextbutton">Next</button>
              </Link>
            </div>
            <div
              className="photo-details"
              style={{ backgroundImage: `url(${blockchain})` }}
            >
              {""}
            </div>
            <div className="details-cards-title">
              <h1>Blockchain and Cryptocurrency</h1>
            </div>
            <div className="details-cards-content">
              <h2>Difficulty:</h2>
              <div className="stars">★★★</div>
              <h2>Description:</h2>
              <p>
                This course explores the potential use of blockchain technology
                by various stakeholders related to economics and finance.
                Starting with a review of the early application of the
                technology, Bitcoin cryptocurrency, students will gain an
                understanding of the commercial, techncal, and public policy
                underpinnings of blockchain technology, distributed ledgers, and
                contracts smart contracts in open source and pricate
                applications. The discussion covers current blockchain
                applications with case reviews from payment systems to
                non-fungible tokens.
              </p>
              <p className="prospek">
                <h3>Prospect Career</h3>
                <ul>
                  <li>- Blockchain Engineer</li>
                  <li>- Blockchain Architect</li>
                  <li>- Technical Analyst</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Detailtiga;
