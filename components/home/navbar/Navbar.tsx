import React from "react";
import Link from "next/link";

//app
import NavButtons from "../../common/base/NavButton";
import PhoneIcon from "@mui/icons-material/Phone";
import AboutUsIcon from "@mui/icons-material/InfoOutlined";
import LocationOnIcon from "@mui/icons-material/AddModerator";
import Person from "@mui/icons-material/Person";
import { BottomNavigationAction, Button } from "@mui/material";
import { useAppDispatch } from "@/store/store";
import { HomePageActions } from "@/store/home/HomePageSatate";

const Navbar = () => {
  const dispatch = useAppDispatch();

  return (
    <div className=" mx-auto text-gray-800 bg-slate-50 mt-5 top-0 w-full z-10 xl max-w-screen-xl  flex justify-between  items-center min-h-12  py-4 px-7 fixed  rounded-lg">
      <NavButtons className="flex bg-transparent ">
        <Link href="/" className="text-xl font-bold self-center text-blue mx-9">
          AidNik
        </Link>
        <NavItems />
      </NavButtons>
      <Button
        className="bg-[#1565c0] text-white text-sm font-bold gap-3 p-6 max-w-24 h-12  mx-9"
        size="small"
        onClick={() =>
          dispatch(
            HomePageActions().isLoginDialogOpen({ isLoginDialogOpen: true })
          )
        }
      >
        ورود
        <Person />
      </Button>
    </div>
  );
};

export default Navbar;

const NavItems = () => {
  return (
    <>
      <BottomNavigationAction
        className="text-blue "
        value="contact"
        label="تماس با ما"
        showLabel
        icon={<PhoneIcon />}
      />
      <BottomNavigationAction
        className="text-blue"
        value="About us"
        label="درباره ما"
        showLabel
        icon={<AboutUsIcon />}
      />
      <BottomNavigationAction
        className="text-blue"
        value="Donate"
        label="خیریه"
        showLabel
        icon={<LocationOnIcon />}
      />
    </>
  );
};
