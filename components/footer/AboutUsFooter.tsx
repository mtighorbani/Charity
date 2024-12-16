import React from "react";
import { Grid, Typography } from "@mui/material";

const AboutUsFooter = () => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h6" className="font-bold text-lg mb-2 text-blue">
        درباره ما
      </Typography>
      <Typography variant="body2" className="text-gray-800">
        ما برای کمک به نیازمندان تلاش می‌کنیم و امید را برای آینده‌ای بهتر زنده
        نگه می‌داریم.
      </Typography>
    </Grid>
  );
};

export default AboutUsFooter;
