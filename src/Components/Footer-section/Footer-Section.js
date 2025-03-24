import React from "react";
import { Box, Typography } from "@mui/material";
import CalendlyWidget from "../Calendly/Calendly";
import "./Footer-Section.css";

const FooterSection = () => {
  return (
    <Box id="section3" className="footer-Section">
      <Typography className="footerSectionText">Schedule a Call</Typography>
      <CalendlyWidget />
    </Box>
  );
};

export default FooterSection;
