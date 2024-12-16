import React from "react";

import Link from "next/link";
import { Grid, Typography } from "@mui/material";

const QuickLinksFooter = () => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h6" className="text-blue font-bold text-lg mb-2">
        لینک‌های سریع
      </Typography>
      <ul className="list-none space-y-1 text-gray-800">
        <li>
          <Link href="/about">درباره ما</Link>
        </li>
        <li>
          <Link href="/donate">کمک مالی</Link>
        </li>
        <li>
          <Link href="/contact">تماس با ما</Link>
        </li>
      </ul>
    </Grid>
  );
};

export default QuickLinksFooter;
