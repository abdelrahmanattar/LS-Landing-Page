import React from "react";
import { Container, Typography, Grid, Avatar, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const TestimonialSection = () => {
  return (
    <Box sx={{ backgroundColor: "#2C2F3A", color: "white", py: 6 }}>
      <Container maxWidth="md">
        {/* Heading */}
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          Cash for Houses, We Pay Top Dollar for Homes in Any Condition
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

        {/* Description */}
        <Typography
          variant="body1"
          textAlign="center"
          color="gray"
          gutterBottom
        >
          We believe selling a house should be fast, and hassle-free. If you're
          interested in selling your house, we can buy it with a fair all-cash
          offer. We work on your schedule, and best of all, when you sell to us,
          you sell it as-is. Walk away without doing any repairs. We’ll even
          clean out the property for you. It’s that easy.
        </Typography>

        {/* Testimonial Section */}
        <Grid container spacing={4} alignItems="center" sx={{ mt: 4 }}>
          {/* Left Content - Image */}
          <Grid item xs={12} md={4} display="flex" justifyContent="center">
            <Avatar
              alt="Testimonial User"
              src="/person1.webp" // Replace with actual image URL
              sx={{ width: 300, height: 300, borderRadius: 2 }}
            />
          </Grid>

          {/* Right Content - Testimonial */}
          <Grid item xs={12} md={8} textAlign="left">
            <Typography variant="body1" fontStyle="italic">
              "This was the easiest experience of my life. If I could give 10
              stars, I would! I cannot thank them enough for making the sale so
              easy, hassle-free, and fast. My family was able to sell our home
              without any agents. Not only did we make more money, but we also
              closed with just one showing."
            </Typography>

            {/* User Info */}
            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <Typography variant="body2" fontWeight="bold" sx={{ mr: 1 }}>
                William Jones
              </Typography>
              {/* Star Rating */}
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} sx={{ color: "#FFD700", fontSize: 18 }} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialSection;
