import React from "react";
import Image from "next/image";
import charityImage from "@/asset/images/charity-word-cloud-heart-concept-56405290.webp";
import CharityImage2 from "@/asset/images/default-image-social.png";

const CharityCards = () => {
  return (
    <div className="grid grid-rows-10 grid-cols-3  gap-16 mx-24 my-16">
      <div className="w-80 row-span-10 col-span-1 bg-slate-50  rounded-lg shadow-lg shadow-blue/40 relative">
        <Image
          alt={"ساختمان خیریه"}
          src={CharityImage2}
          fill
          className="rounded-lg "
        />
      </div>
      <div className="w-80  bg-blue row-span-5  col-span-1 rounded-lg shadow-lg shadow-blue/40">
        {" "}
        <h1 className="font-extrabold text-5xl text-center mt-20 text-white">
          همین الان کمک کن!
        </h1>
      </div>
      <div className="w-80 row-span-10 col-span-1   rounded-lg shadow-lg  relative">
        <Image
          alt={"ساختمان خیریه"}
          src={charityImage}
          fill
          className=" rounded-lg"
        />
      </div>
      <div className="w-80  col-span-1 row-span-5  bg-blue rounded-lg shadow-lg shadow-blue/40">
        <h1 className="font-extrabold text-5xl text-center mt-24 text-white">
          لیست برنده ها
        </h1>
      </div>
    </div>
  );
};

export default CharityCards;
