import { Home, VerifiedUser, AttachMoney } from "@mui/icons-material";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";

const features = [
  {
    Icon: Home,
    title: "Experience",
    description:
      "Local Cash Buyers that you can trust. We offer an alternative for those homeowners who may not have the time or ability to list their house on the market for top dollar.",
  },
  {
    Icon: VerifiedUser,
    title: "Reliability",
    description:
      "Fully confidential - Avoid having to share your information with agents, dozens of buyers, and the world on the MLS. Our process is entirely private and discreet.",
  },
  {
    Icon: AttachMoney,
    title: "Zero Fees",
    description:
      "We charge no fees or commissions when we buy your house. The sales price is the amount that goes into your pocket.",
  },
];

const FeatureCard = ({ Icon, title, description }) => (
  <Paper elevation={3} sx={{ p: 4, textAlign: "center", borderRadius: 2 }}>
    <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
      <Icon sx={{ fontSize: 50, color: "primary.main" }} />
    </Box>
    <Typography variant="h6" sx={{ fontWeight: "bold", color: "text.primary" }}>
      {title}
    </Typography>
    <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
      {description}
    </Typography>
  </Paper>
);

const WhyChooseUs = () => {
  return (
    <Box sx={{ bgcolor: "grey.100", py: 10, textAlign: "center" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "text.primary" }}
        >
          Why Choose Us
        </Typography>
        <Box
          sx={{
            width: 80,
            height: 4,
            bgcolor: "success.main",
            mx: "auto",
            my: 2,
          }}
        />
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 5 }}>
          We have seen it all out there and are ready to provide you with the
          Best Offer Possible!
        </Typography>
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <FeatureCard {...feature} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
