import "../../assets/pages/hero.css";
import Cards from "../../components/home/cards";
import solver from "../../images/solver.png";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="content">
        <div>
          <h1>Choose The Right Subject Of Interest</h1>
          <div className="button_container">
            <button className="main__btn">
              <a href="rekomendasi" class="getrekomen">
                Get Rekomendasi
              </a>
            </button>
          </div>
          <Cards />
        </div>
      </div>

      <div className="right-hero">
        <div className="card-image">
          <img src={solver}></img>
        </div>
        <h1>Solusi Mahasiswa dalam memilih Mata Kuliah Peminatan</h1>
      </div>
    </section>
  );
};

export default Hero;
