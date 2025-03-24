import React from "react";
import { Typography, Box, Container } from "@mui/material";

const TermsandConditions = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        {/* Centered Heading */}
        <Typography variant="h4" textAlign="center" gutterBottom>
          Terms of Use
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>1. Acceptance of Terms</strong> <br />
          By accessing or using{" "}
          <strong>Boundless Vision Investments, LLLP</strong> services,
          including our platform, you agree to comply with these Terms of Use.
          If you do not agree, please do not use our services.
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>2. Use of Services</strong> <br />
          You agree to use our services for lawful purposes only. You may not:
        </Typography>

        <ul>
          <li>Violate any local, state, or federal laws</li>
          <li>Use our services to send spam or unauthorized communications</li>
          <li>
            Attempt to access, tamper with, or interfere with our platform or
            services
          </li>
        </ul>

        <Typography variant="body1" paragraph>
          <strong>3. User Responsibilities</strong> <br />
          If you create an account or interact with our services, you are
          responsible for maintaining the confidentiality of your credentials
          and for all activities associated with your usage.
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>4. Intellectual Property</strong> <br />
          All content provided through our services, including text, graphics,
          logos, and software, is owned by or licensed to us. You may not copy,
          reproduce, or distribute our content without our permission.
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>5. Limitation of Liability</strong> <br />
          We are not liable for any indirect, incidental, or consequential
          damages arising from your use of our services. Our total liability to
          you, under any circumstances, shall not exceed the total amount you
          have paid for our services within the past 12 months, if applicable.
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>6. Termination</strong> <br />
          We reserve the right to terminate or suspend your access to our
          services at any time, without notice, if you violate these Terms of
          Use.
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>7. Changes to These Terms</strong> <br />
          We may update these Terms of Use from time to time. Any changes will
          be posted with an updated effective date.
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>8. Governing Law</strong> <br />
          These Terms are governed by the laws of Georgia, USA. Any disputes
          shall be resolved in the courts of Georgia, USA.
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>9. Contact Us</strong> <br />
          If you have any questions about these Terms of Use, please contact us
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

export default TermsandConditions;
