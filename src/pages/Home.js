// Import assets
import "../assets/pages/home.css";
import Hero from "../components/home/Hero";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

const Home = () => {
  return (
    <main className="home-page">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
};

export default Home;
