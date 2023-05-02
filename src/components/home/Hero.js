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
            <a href="rekomendasi" class="getrekomen">
              <button className="main__btn">Get Recommendation</button>
            </a>
          </div>
          <Cards />
        </div>
      </div>

      <div className="right-hero">
        <div className="card-image">
          <img src={solver}></img>
        </div>
        <h1>Student Solutions In Choosing Specialization Courses</h1>
      </div>
    </section>
  );
};

export default Hero;
