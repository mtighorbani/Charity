import React from "react";
import Image from "next/image";
import BgImage from "@/asset/images/istockphoto-1092744152-2048x2048 (1).jpg";
import BlurTextBox from "../common/base/BlurTextBox";
import Navbar from "./navbar/Navbar";
import homepageCard from "@/utils/homepagedata";
import Card from "../common/Card";

const HomePageNavbar = () => {
  return (
    <>
      <div className="relative">
        <Navbar />
        <BlurTextBox
          text="کمک شما، امید تازه برای زندگی دیگران"
          className="mt-60 absolute mr-20"
          textClassName="text-white"
        />
        <BlurTextBox
          text="عشق هیچوقت نمی میرد"
          className="mt-80 bg-white mr-32 absolute"
          textClassName="text-blue"
        />
        <Image
          src={BgImage}
          alt="کمک | خیریه"
          objectFit="cover"
          className="top-0 rounded-t-xl"
          height={1000}
        />
        <Card cardData={homepageCard} />
      </div>
    </>
  );
};

export default HomePageNavbar;
