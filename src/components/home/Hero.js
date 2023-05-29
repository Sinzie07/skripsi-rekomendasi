import "../../assets/pages/hero.css";
import Cards from "../../components/home/cards";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="content">
        <h1>Choose The Right Subject Of Interest</h1>
        <h2>Student Solutions In Choosing Specialization Courses</h2>
        <div className="button_container">
          <a href="rekomendasi" class="getrekomen">
            <button className="main__btn">Get Recommendation</button>
          </a>
        </div>
        <Cards />
      </div>
    </section>
  );
};

export default Hero;
