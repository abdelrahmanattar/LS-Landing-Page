import React from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Container,
  Typography,
  Box,
  Paper,
  Link,
} from "@mui/material";

const CashOfferForm = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('/formbackground.avif')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4,m: 3 , textAlign: "center" }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Need To Sell Your House Fast?
          </Typography>
          <Typography variant="h6" fontWeight="bold" color="gray" gutterBottom>
            We buy houses in Atlanta
          </Typography>
          <Typography color="textSecondary" mb={3}>
            Call us for a cash offer
          </Typography>

          {/* Form Fields */}
          <form>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Address *"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email *"
              type="email"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Phone *"
              type="tel"
              variant="outlined"
              margin="normal"
              required
            />

            {/* Checkbox */}
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="I agree to be contacted via call, email, and text."
            />

            {/* Submit Button */}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2, py: 1.5, fontSize: "1rem", fontWeight: "bold" }}
            >
              CASH OFFER NOW!
            </Button>
            <Typography variant="caption" color="textSecondary" mt={1}>
              Click for your offer
            </Typography>
          </form>
          <Link
            color="text.secondary"
            variant="body2"
            href="/privacy-and-policy"
          >
            Privacy Policy
          </Link>
          <Typography sx={{ display: "inline", mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link
            color="text.secondary"
            variant="body2"
            href="/terms-and-condition"
          >
            Terms of Service
          </Link>
        </Paper>
      </Container>
    </Box>
  );
};

export default CashOfferForm;
