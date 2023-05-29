import "../../assets/pages/navbar.css";
import logo from "../../images/logowebsite.png";

const Hero = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div class="logo">
          <img
            src={logo}
            alt="logo"
            onClick={() => (window.location.href = "/")}
          ></img>
        </div>
        <div className="navbar__menu">
          <a href="/" className="navbar__links" id="home-page">
            Home
          </a>
          <a href="about" className="navbar__links" id="about-page">
            About
          </a>
          <a href="information" className="navbar__links" id="information-page">
            Information
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Hero;
