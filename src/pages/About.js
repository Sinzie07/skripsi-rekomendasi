import Navbar from "../components/global/Navbar";
import "../../src/assets/pages/about.css";
import sinzie from "../../src/images/sinzie.png";
import Footer from "../components/global/Footer";

const About = () => {
  return (
    <main className="about-page">
      <Navbar />
      <div className="title-about">
        <h1>Meet the Creator</h1>
      </div>
      <div className="content-about">
        <div className="card-image">
          <img src={sinzie}></img>
        </div>
        <h2 className="nama">Sinzie Winata</h2>
        <p>Teknik Informatika 2018</p>
        <p>Universitas Multimedia Nusantara</p>
      </div>
      <Footer />
    </main>
  );
};

export default About;
