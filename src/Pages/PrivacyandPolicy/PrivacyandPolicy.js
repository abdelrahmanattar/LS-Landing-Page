import React from "react";
import { Typography, Box, Container } from "@mui/material";

const PrivacyandPolicy = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Privacy and Policy
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>1. Introduction</strong> <br />
          Welcome to our company (Boundless Vision Investments, LLLP). We are
          committed to protecting your personal information and your right to
          privacy. This Privacy Policy explains how we collect, use, disclose,
          and safeguard your information when you visit our website and use our
          services.
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>2. Information We Collect</strong> <br />
          We may collect personal information that you provide directly to us,
          such as:
        </Typography>

        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Payment information</li>
          <li>Any other information you voluntarily provide</li>
        </ul>

        <Typography variant="body1" paragraph>
          We also automatically collect certain information when you visit our
          website, including:
        </Typography>

        <ul>
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Pages you visit and time spent on them</li>
          <li>Device information</li>
        </ul>

        <Typography variant="body1" paragraph>
          <strong>3. How We Use Your Information</strong> <br />
          We use the information we collect in the following ways:
        </Typography>

        <ul>
          <li>To provide and maintain our services</li>
          <li>To process transactions and send confirmations</li>
          <li>
            To send marketing and promotional communications (if you opt-in)
          </li>
          <li>To improve our website and services</li>
          <li>To comply with legal obligations</li>
        </ul>

        <Typography variant="body1" paragraph>
          <strong>4. How We Share Your Information</strong> <br />
          We do not sell or rent your personal information. We may share it
          with:
        </Typography>

        <ul>
          <li>
            Service providers who help us operate our business (e.g., payment
            processors, hosting providers)
          </li>
          <li>
            Law enforcement or regulatory authorities when required by law
          </li>
        </ul>

        <Typography variant="body1" paragraph>
          <strong>5. Data Security</strong> <br />
          We use appropriate technical and organizational measures to protect
          your personal data. However, no electronic transmission over the
          internet is 100% secure.
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>6. Your Rights</strong> <br />
          Depending on your location, you may have rights regarding your
          personal data, including:
        </Typography>

        <ul>
          <li>The right to access and request copies of your data</li>
          <li>The right to request corrections or deletions</li>
          <li>The right to withdraw consent at any time</li>
        </ul>

        <Typography variant="body1" paragraph>
          <strong>7. Changes to This Policy</strong> <br />
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated effective date.
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>8. Contact Us</strong> <br />
          If you have any questions about this Privacy Policy, please contact us
          at:
        </Typography>

        <Typography variant="body1">
          <strong>Email:</strong> Payneinvestments2023@gmail.com <br />
          <strong>Phone:</strong> +1 (706) 254-5340 <br />
          <strong>Address:</strong> 155 Bernice Drive, Bogart, GA, 30622, USA
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyandPolicy;
