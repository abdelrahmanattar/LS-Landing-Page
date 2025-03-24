import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#2C2F3A", padding: "5px" }}
    >
      <Toolbar variant="dense">
        <Box
          className="navButtons"
          sx={{ display: "flex", alignItems: "center", gap: 2 }}
        >
          <Typography variant="h6" sx={{ flexGrow: 1, color: "white" }}>
            Boundless Vision Investments
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Our process</Button>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Our Pricing</Button>
          <Button color="inherit">Our Reviews</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
