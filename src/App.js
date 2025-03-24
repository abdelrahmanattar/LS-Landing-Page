import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PreviewPage from "./Pages/PreviewPage/PreviewPage";
import TermsandConditions from "./Pages/TermsandConditions/TermsandConditions";
import PrivacyandPolicy from "./Pages/PrivacyandPolicy/PrivacyandPolicy";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PreviewPage />} />
        <Route path="/home" element={<PreviewPage />} />
        <Route path="/terms-and-condition" element={<TermsandConditions />} />
        <Route path="/privacy-and-policy" element={<PrivacyandPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
