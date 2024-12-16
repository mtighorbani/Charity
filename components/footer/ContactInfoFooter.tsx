import React from "react";
import { Grid, Typography } from "@mui/material";

const ContactInfoFooter = () => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h6" className="font-bold text-blue text-lg mb-2">
        اطلاعات تماس
      </Typography>
      <ul className="space-y-1">
        <Typography variant="body2" className="text-gray-800">
          ایمیل: info@charity.com
        </Typography>
        <Typography variant="body2" className="text-gray-800">
          تلفن: 123-456-7890
        </Typography>
        <Typography variant="body2" className="text-gray-800">
          آدرس: تهران، خیابان امید
        </Typography>
      </ul>
    </Grid>
  );
};

export default ContactInfoFooter;
