import blockchain1 from "../../images/blockchain1.jpg";
import "../../assets/pages/details.css";

function resultdetailtiga() {
  return (
    <main className="details-page">
      <div className="details-information">
        <h1>Details Peminatan</h1>
        <div className="details-wrapper">
          <div className="details-photo-cards">
            <div
              className="photo-details"
              style={{ backgroundImage: `url(${blockchain1})` }}
            >
              {""}
            </div>
            <div className="details-cards-title">
              <h1>Blockchain and Cryptocurrency</h1>
            </div>
            <div className="details-cards-content">
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default resultdetailtiga;
