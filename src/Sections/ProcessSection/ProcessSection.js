import React from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const steps = [
  {
    title: "STEP 1",
    subtitle: "Request A Quote",
    description: "Tell us about your property. It’s quick, easy, and free!",
    image: "/requestaqoute.jpg  ", // Replace with actual image URL
  },
  {
    title: "STEP 2",
    subtitle: "Schedule a Call",
    description: "We will contact you to set up a quick appointment.",
    image: "/sceduleacall.jpg", // Replace with actual image URL
  },
  {
    title: "STEP 3",
    subtitle: "Start Closing Process",
    description:
      "We present you with a fair all-cash offer... Or discuss the best method to proceed. We close at a local reputable title company.",
    image: "/startclosingprocess.jpg", // Replace with actual image URL
  },
];

const ProcessSection = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", py: 6 }}>
      {/* Section Title */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Our process is simple and easy to understand.
      </Typography>

      {/* Green Underline */}
      <Box
        sx={{
          width: 80,
          height: 4,
          backgroundColor: "#2ECC71",
          mx: "auto",
          my: 2,
        }}
      />

      {/* Subtitle */}
      <Typography variant="body1" color="gray" gutterBottom>
        Selling your house to us is as easy as 1-2-3.
      </Typography>

      {/* Process Steps */}
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {steps.map((step, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card
              elevation={0}
              sx={{ boxShadow: "none", backgroundColor: "transparent" }}
            >
              <CardMedia
                component="img"
                height="200"
                image={step.image}
                alt={step.title}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6" fontWeight="bold">
                  {step.title}
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold">
                  {step.subtitle}
                </Typography>
                <Typography variant="body2" color="gray">
                  {step.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProcessSection;
