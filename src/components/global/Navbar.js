import "../../assets/pages/navbar.css";
import logo from "../../images/logowebsite.png";

const Hero = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <img
          className="logo"
          src={logo}
          alt="logo"
          onClick={() => (window.location.href = "/")}
        ></img>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <a href="/" className="navbar__links" id="home-page">
              Home
            </a>
          </li>
          <li className="navbar__item">
            <a href="about" className="navbar__links" id="about-page">
              About
            </a>
          </li>
          <li className="navbar__item">
            <a
              href="information"
              className="navbar__links"
              id="information-page"
            >
              Information
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Hero;
