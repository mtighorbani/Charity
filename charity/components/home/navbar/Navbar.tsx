import React from "react";
import NavButtons from "../../common/base/NavButton";

import FolderIcon from "@mui/icons-material/Folder";
import PhoneIcon from "@mui/icons-material/Phone";
import AboutUsIcon from "@mui/icons-material/InfoOutlined";
import LocationOnIcon from "@mui/icons-material/AddModerator";
import { BottomNavigationAction } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" mx-auto text-gray-800 bg-white/50 mt-5 absolute top-0 w-full z-10 backdrop-blur-xl  flex justify-between items-center min-h-12  py-4 px-7  rounded-lg">
      <Link href="/" className="text-xl font-bold">
        NikNess
      </Link>
      <NavButtons className="flex bg-transparent ">
        <NavItems />
      </NavButtons>
    </div>
  );
};

export default Navbar;

const NavItems = () => {
  return (
    <>
      <BottomNavigationAction
        className="text-gray-600"
        label="contact"
        value="contact"
        icon={<PhoneIcon />}
      />
      <BottomNavigationAction
        className="text-gray-600"
        label="About us"
        value="About us"
        icon={<AboutUsIcon />}
      />
      <BottomNavigationAction
        className="text-gray-600"
        label="Donate"
        value="Donate"
        icon={<LocationOnIcon />}
      />
    </>
  );
};
