import React from "react";
import Image from "next/image";
import BgImage from "@/asset/images/closeup-diverse-people-joining-their-hands_53876-96081.webp";
import BlurTextBox from "./BlurTextBox";
import Navbar from "./navbar/Navbar";

const HomePageNavbar = () => {
  return (
    <div className="relative">
      <Navbar />
      <BlurTextBox />
      <Image
        src={BgImage}
        alt="کمک | خیریه"
        objectFit="cover"
        className="top-0 rounded-t-xl"
        height={1000}
      />
    </div>
  );
};

export default HomePageNavbar;
