import React from "react";
import { Container, Typography, Box, Grid, Paper } from "@mui/material";

const ComparisonSection = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", py: 6 }}>
      {/* Section Title */}
      <Typography variant="h4" fontWeight="bold">
        You pay no commissions or fees
      </Typography>

      {/* Subtitle */}
      <Typography variant="body1" color="gray" sx={{ mt: 1, mb: 4 }}>
        No listing fees, agent commissions, and a quick and hassle-free closing
        process. When you sell to companies that buy houses, you skip the hassle
        of repairs and agents.
      </Typography>

      {/* Table Layout */}
      <Paper sx={{ overflow: "hidden", borderRadius: 2 }}>
        <Grid container>
          {/* Headers */}
          <Grid item xs={12} sm={4} sx={{ p: 3 }}></Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{ backgroundColor: "#2C3E50", color: "white", p: 3 }}
          >
            <Typography variant="h5" fontWeight="bold">
              Selling Cash
            </Typography>
            <Typography variant="h3" fontWeight="bold">
              0%
            </Typography>
            <Typography variant="body2">*Our commissions</Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ backgroundColor: "#ECF0F1", p: 3 }}>
            <Typography variant="h5" fontWeight="bold">
              Selling with Agent
            </Typography>
            <Typography variant="h3" fontWeight="bold" color="primary">
              6%
            </Typography>
            <Typography variant="body2">*Their commissions</Typography>
          </Grid>

          {/* Table Content */}
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {[
                {
                  label: "Commissions / Fees",
                  cash: "NONE",
                  agent: "6% on average is paid by Seller",
                },
                {
                  label: "Who Pays Closing Costs?",
                  cash: "NONE",
                  agent: "Seller Pays 2%",
                },
                {
                  label: "Inspection & Financing Contingency",
                  cash: "NONE, we pay CASH",
                  agent: "Yes, sales can fall through",
                },
                {
                  label: "Appraisal Needed?",
                  cash: "NONE",
                  agent: "Needed for Conventional Sale",
                },
                {
                  label: "Average Days Until Sold",
                  cash: "+/- 7 Days",
                  agent: "+/- 91 Days",
                },
                {
                  label: "Number of Showings",
                  cash: "One, Just Us",
                  agent: "Multiple Showings",
                },
                {
                  label: "Closing Date",
                  cash: "You Pick, Close in 7 Days",
                  agent: "+/- 30-60 Days after accepting offer",
                },
                {
                  label: "Who Pays For Repairs?",
                  cash: "We Buy 'As-Is'",
                  agent: "Usually Paid by Seller",
                },
              ].map((row, index) => (
                <Grid container key={index}>
                  <Grid item xs={4}>
                    <Typography fontWeight="bold" fontSize={"18px"}>
                      {row.label}
                    </Typography>
                  </Grid>
                  <Grid item xs={4} sx={{ backgroundColor: "#2C3E50", py: 1 }}>
                    <Typography color="white">{row.cash}</Typography>
                  </Grid>
                  <Grid item xs={4} sx={{ backgroundColor: "#ECF0F1", py: 1 }}>
                    <Typography>{row.agent}</Typography>
                  </Grid>
                </Grid>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ComparisonSection;
