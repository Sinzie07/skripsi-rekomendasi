import society1 from "../../images/computersociety1.jpg";
import society2 from "../../images/computersociety2.png";
import society3 from "../../images/computersociety3.jpg";
import society4 from "../../images/computersociety4.jpg";
import cloudsecurity from "../../images/cloudsecurity2.jpg";
import grid from "../../images/grid.png";
import firewall from "../../images/firewall1.png";
import Footer from "../global/Footer";
import "../../assets/pages/details.css";
import { Link } from "react-router-dom";
import Navbar from "../global/Navbar";
import Detailcard from "./DetailsCard";

function Detaillima() {
  return (
    <div className="detatils-page">
      <Navbar />

      <div className="details-container">
        <div className="details-konten">
          <div className="details-description">
            <h1>Computer and Society</h1>
            <p>
              The rapid development of ICT has changed many activities in our
              lives. For example, in learning, playing, working, communication
              and doing business. Moreover, now social media has also been
              widely used in various ways. In addition to having a positive
              impact, the development of ICT also has a negative impact needs to
              be understood so that the community using ICT can minimize its
              impact. To that end, the Indonesian government has drawn up
              various laws, including the Law of Information and Electronic
              Transactions to regulate the use of ICT in society. As an ICT
              professional, it is not enough just to master the technology but
              also to understand the code ethics to prevent the misuse of ICT,
              both for personal interests and the interests of other parties.
            </p>
            <h2>Difficulty:</h2>
            <div className="details-stars">★★★</div>
            <h2 className="details-prospek">Prospect Work</h2>
            <div className="cards_container">
              <div className="cards_wrapper">
                <ul className="cards_items">
                  <Detailcard src={society2} text="Project Manager" />
                  <Detailcard src={society3} text="IT Consultant" />
                  <Detailcard src={society4} text="Technopreneur" />
                </ul>
              </div>
            </div>
          </div>
          <div className="details-image">
            <img src={society1}></img>
          </div>
        </div>
        <div className="details-navigation">
          <Link to="/detailcloudsecurity">
            <button className="details-navigation-backbutton">
              <img src={cloudsecurity} alt="Back" />
              <p className="back-text">Back</p>
            </button>
          </Link>
          <Link to="/information">
            <button className="details-navigation-infobutton">
              <img src={grid} alt="Information" />
              <p>Information</p>
            </button>
          </Link>
          <Link to="/detailfirewall">
            <button className="details-navigation-nextbutton">
              <img src={firewall} alt="Next" />
              <p className="next-text">Next</p>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Detaillima;
