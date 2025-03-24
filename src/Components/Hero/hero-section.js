import React from "react";
import { Box, Typography, Button } from "@mui/material";
// import Typed from "react-typed";
import "./hero-section.css";
import VideoBackground from "../VideoBackground/VideoBackground";

const HeroSection = () => {
  return (
    <Box id="section1" className="hero-section">
      <VideoBackground />
      <Typography className="hero-title">We Source Qualified Deals</Typography>
      <Typography className="hero-title">Right To Your Desk</Typography>
      <Box className="heroButtons">
        <Button variant="contained" className="primaryButton">
          Get started
        </Button>
        <Button variant="outlined" className="secondaryButton">
          Contact us
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
