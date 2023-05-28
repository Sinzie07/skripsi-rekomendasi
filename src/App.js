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
import Detailresultsatu from "./components/result-detail/resultdetailsatu";
import Detailresultdua from "./components/result-detail/resultdetaildua";
import Detailresultiga from "./components/result-detail/resultdetailtiga";
import Detailresultempat from "./components/result-detail/resultdetailempat";
import Detailresultlima from "./components/result-detail/resultdetaillima";
import Detailresultenam from "./components/result-detail/resultdetailenam";
import Detailresulttujuh from "./components/result-detail/resultdetailtujuh";
import Detailresultlapan from "./components/result-detail/resultdetaillapan";
import Detailresultsembilan from "./components/result-detail/resultdetailsembilan";
import AlternativeProvider from "./context/AlternativeContext";
import Contoh from "./components/detail/contoh";

function App() {
  return (
    <AlternativeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/about" element={<About />} />
          <Route path="/contoh" element={<Contoh />} />
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
          <Route path="/result3d" element={<Detailresultsatu />} />
          <Route path="/resultarvr" element={<Detailresultdua />} />
          <Route path="/resultblockchain" element={<Detailresultiga />} />
          <Route path="/resultcloud" element={<Detailresultempat />} />
          <Route path="/resultcomputersociety" element={<Detailresultlima />} />
          <Route path="/resultfirewall" element={<Detailresultenam />} />
          <Route
            path="/resultmobileprogramming"
            element={<Detailresulttujuh />}
          />
          <Route
            path="/resultmultimeidaconcept"
            element={<Detailresultlapan />}
          />
          <Route
            path="resultparalelprocessing"
            element={<Detailresultsembilan />}
          />
        </Routes>
      </Router>
    </AlternativeProvider>
  );
}

export default App;
