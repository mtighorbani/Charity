import React from "react";
import Image from "next/image";
import BgImage from "@/asset/images/istockphoto-1092744152-2048x2048.jpg";
import BlurTextBox from "../common/base/BlurTextBox";
import homepageCard from "@/utils/homepagedata";
import Card from "../common/Card";

const HomePageNavbar = () => {
  return (
    <>
      <div className="relative">
        <BlurTextBox
          text="کمک شما، امید تازه برای زندگی دیگران"
          className="mt-60 absolute mr-20 max-lg:hidden"
          textClassName="text-white"
        />
        <BlurTextBox
          text="عشق هیچوقت نمی میرد"
          className="mt-80 bg-white mr-32 absolute max-lg:hidden"
          textClassName="text-blue"
        />
        <Image
          src={BgImage}
          alt="کمک | خیریه"
          className="top-0 rounded-t-xl max-md:h-96"
        />
        <div className="absolute  transform -translate-y-1/4 w-full">
          <Card classNames="mt-[-80px]" cardData={homepageCard} />
        </div>
      </div>
    </>
  );
};

export default HomePageNavbar;
