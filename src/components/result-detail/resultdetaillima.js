import society1 from "../../images/computersociety1.jpg";
import "../../assets/pages/details.css";

function resultdetaillima() {
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
              style={{ backgroundImage: `url(${society1})` }}
            >
              {""}
            </div>
            <div className="details-cards-title">
              <h1>Computer and Society</h1>
            </div>
            <div className="details-cards-content">
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

export default resultdetaillima;
