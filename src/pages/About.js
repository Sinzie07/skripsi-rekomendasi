import "../../src/assets/pages/about.css";
import sinzie from "../../src/images/sinzie.png";

const About = () => {
  return (
    <main className="about-page">
      <div className="title-about">
        <h1>Meet the Creator</h1>
      </div>
      <div className="content-about">
        <div className="card-image">
          <img src={sinzie} alt="gambar sinji"></img>
        </div>
        <h2 className="nama">Sinzie Winata</h2>
        <p>Teknik Informatika 2018</p>
        <p>Universitas Multimedia Nusantara</p>
      </div>
    </main>
  );
};

export default About;
