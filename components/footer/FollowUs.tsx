import React from "react";

import Link from "next/link";
import { Grid, Typography } from "@mui/material";

const FollowUs = () => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h6" className="font-bold text-blue text-lg mb-2">
        ما را دنبال کنید
      </Typography>

      <Link
        href="https://facebook.com"
        target="_blank"
        className="fab fa-facebook text-gray-800 hover:text-blue text-xl block"
      >
        Telegram
      </Link>
      <Link
        href="https://twitter.com"
        target="_blank"
        className="fab fa-twitter text-gray-800 hover:text-blue text-xl block"
      >
        Instagram
      </Link>
      <Link
        href="https://instagram.com"
        target="_blank"
        className="fab fa-instagram text-gray-800 hover:text-blue text-xl block"
      >
        Twitter
      </Link>
    </Grid>
  );
};

export default FollowUs;
