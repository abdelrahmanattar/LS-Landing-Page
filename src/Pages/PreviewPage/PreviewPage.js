import React from "react";
import "./PreviewPage.css"; // Import the CSS file
import SellHouseSection from "../../Sections/SellHouseSection/SellHouseSection";
import TestimonialSection from "../../Sections/TestimonialSection/TestimonialSection";
import ProcessSection from "../../Sections/ProcessSection/ProcessSection";
import ComparisonSection from "../../Sections/ComparisonSection/ComparisonSection";
import WhyChooseUs from "../../Sections/WhyChooseUsSection/WhyChooseUsSection";
import CashOfferForm from "../../Sections/CashOfferForm/CashOfferForm";
import { Container } from "@mui/material";

const PreviewPage = () => {
  return (
    <div>
      <CashOfferForm />
      <SellHouseSection />
      <TestimonialSection />
      <ProcessSection />
      <ComparisonSection />
      <WhyChooseUs />
    </div>
  );
};

export default PreviewPage;
