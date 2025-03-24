import React from "react";
import { Container, Typography, Grid, Avatar } from "@mui/material";

const SellHouseSection = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", py: 6 }}>
      {/* Heading */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Your home is worth more than you think
      </Typography>
      <Typography variant="h5" color="textSecondary" gutterBottom>
        Get a fair offer and sell your house
      </Typography>

      {/* Content Grid */}
      <Grid container spacing={4} alignItems="center" sx={{ mt: 4 }}>
        {/* Left Content (Text) */}
        <Grid item xs={12} md={8} textAlign="left">
          <Typography variant="h5" fontWeight="bold">
            No Commissions
          </Typography>
          <Typography variant="body1" paragraph sx={{ paddingBottom: "10px" }}>
            No commissions (and we’ll pay closing costs!) – We don’t charge
            commissions. Our profit comes from fixing up your house and going
            through the hassle of selling it ourselves.
          </Typography>

          <Typography variant="h5" fontWeight="bold">
            Sell In as-is Condition
          </Typography>
          <Typography variant="body1" paragraph sx={{ paddingBottom: "10px" }}>
            When we say “we buy houses as-is,” we mean it. Does your house need
            repairs you don’t want to make? Great! We’ll do the repairs for you.
          </Typography>

          <Typography variant="h5" fontWeight="bold">
            Fast Cash Sale
          </Typography>
          <Typography variant="body1">
            We’ll know very quickly if we can help and, unlike selling through
            an agent, you don’t have to wait to see if the buyer can get
            financing – we’re ready to buy right now!
          </Typography>
        </Grid>

        {/* Right Content (Image) */}
        <Grid item xs={12} md={4} display="flex" justifyContent="center">
          <Avatar
            alt="Agent"
            src="/person2.webp" // Replace with actual image URL
            sx={{ width: 150, height: 150 }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SellHouseSection;
