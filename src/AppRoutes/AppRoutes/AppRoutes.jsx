import Footer from "../../Components/Footer/Footer";
import FooterWrapper from "@Components/Footer/FooterWrapper";
import NavBarWrapper from "../../Components/NavigationBar/NavBarWrapper";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import Home from "@Pages/HomePage/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import * as DefaultRoutes from "@Routes/DefaultRoutes";
import { Box } from "@mui/material";
import PreviewPage from "../../Pages/PreviewPage/PreviewPage";

export default function Paths() {
  return (
    <Router>

      <NavBarWrapper >
        <NavigationBar
          text="Applicant Exams"
        />
      </NavBarWrapper>

      <Box>
        <Routes>
          <Route path="/" element={<PreviewPage />} />
          <Route path="/home" element={<PreviewPage />} />
        </Routes>
      </Box>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Router>
  );
}
