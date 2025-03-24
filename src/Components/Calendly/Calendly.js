import React, { useEffect } from "react";
import "./Calendly.css";

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;

    script.onload = () => {
      console.log("Calendly script loaded successfully");
    };

    script.onerror = () => {
      console.error("Failed to load Calendly script");
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup script if component unmounts
      document.body.removeChild(script);
      // Additional cleanup if needed
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/abdelrahmanattar-noaccentcallers/30min?embed_domain=localhost%3A8000&embed_type=Inline&hide_landing_page_details=1&hide_gdpr_banner=1&background_color=010000&text_color=ffffff&primary_color=911919"
      style={{ width: "100%", height: "100vh", marginTop: "0" }}
    ></div>
  );
};

export default CalendlyWidget;
