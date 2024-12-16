import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";

//app
import AboutUsFooter from "./AboutUsFooter";
import QuickLinksFooter from "./QuickLinksFooter";
import ContactInfoFooter from "./ContactInfoFooter";
import FollowUs from "./FollowUs";

const Footer = () => {
  return (
    <Box component="footer" className="bg-gray-50 " sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <AboutUsFooter />
          <QuickLinksFooter />
          <ContactInfoFooter />
          <FollowUs />
        </Grid>

        <Box className="mt-8 text-center text-gray-400">
          <Typography variant="body2">
            © 2024 تمامی حقوق محفوظ است | سایت خیریه
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
