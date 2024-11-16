"use client";
import BottomNavigation from "@mui/material/BottomNavigation";
import { useState } from "react";

type NavButtonsProps = {
  children: any;
  className?: string;
};

const NavButtons = ({ children, className }: NavButtonsProps) => {
  const [value, setValue] = useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      className={className}
      value={value}
      onChange={handleChange}
    >
      {children}
    </BottomNavigation>
  );
};
export default NavButtons;
