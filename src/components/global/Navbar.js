import "../../assets/pages/navbar.css";

const Hero = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a href="/" id="navbar__logo">
          COLOR
        </a>
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
