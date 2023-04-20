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
import Detaildua from "./components/detail/Detaildua";
import Detailtiga from "./components/detail/Detailtiga";
import Detailempat from "./components/detail/Detailempat";
import Detaillima from "./components/detail/Detaillima";
import Detailenam from "./components/detail/Detailenam";
import Detailtujuh from "./components/detail/Detailtujuh";
import Detaillapan from "./components/detail/Detaillapan";
import Detailsembilan from "./components/detail/Detailsembilan";
import Homeadmin from "././admin/adminhome";

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
        <Route path="/detailarvr" element={<Detaildua />} />
        <Route path="/detailblockchain" element={<Detailtiga />} />
        <Route path="/detailcloudsecurity" element={<Detailempat />} />
        <Route path="/detailsociety" element={<Detaillima />} />
        <Route path="/detailfirewall" element={<Detailenam />} />
        <Route path="/detailmobile" element={<Detailtujuh />} />
        <Route path="/detailmultimedia" element={<Detaillapan />} />
        <Route path="/detailparalel" element={<Detailsembilan />} />
        <Route path="/homeadmin" element={<Homeadmin />} />
      </Routes>
    </Router>
  );
}

export default App;
