import React from "react";
import Image from "next/image";
import charityImage from "@/asset/images/charity-word-cloud-heart-concept-56405290.webp";
import CharityImage2 from "@/asset/images/default-image-social.png";

const CharityCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 sm:mx-8 md:mx-16  my-8">
      <div className="relative w-full h-64 sm:h-72 bg-slate-50 rounded-lg shadow-lg shadow-blue/40">
        <Image
          alt="ساختمان خیریه"
          src={CharityImage2}
          fill
          className="rounded-lg object-cover"
        />
      </div>

      <div className="w-full h-64 sm:h-72 bg-blue rounded-lg shadow-lg shadow-blue/40 flex items-center justify-center">
        <h1 className="font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white text-center">
          همین الان کمک کن!
        </h1>
      </div>
      <div className="relative w-full h-64 sm:h-72 bg-slate-50 rounded-lg shadow-lg shadow-blue/40">
        <Image
          alt="ساختمان خیریه"
          src={charityImage}
          fill
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default CharityCards;
