import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import About from "./pages/About";
import Information from "./pages/Information";
import Rekomendasi from "./pages/Rekomendasi";
import Login from "./admin/login";
import UserPage from "./admin/userpage";
import Detailsatu from "./components/detail/Detailsatu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/about" element={<About />} />
        <Route path="/information" element={<Information />} />
        <Route path="/rekomendasi" element={<Rekomendasi />} />
        <Route path="/login" element={<Login />} />
        <Route path="/viewuser" element={<UserPage />} />
        <Route path="/detailtridi" element={<Detailsatu />} />
      </Routes>
    </Router>
  );
}

export default App;
