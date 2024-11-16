import getClassNames from "@/utils/getClassName";
import Image from "next/image";
import React from "react";
import BgImage from "@/asset/images/istockphoto-1092744152-2048x2048 (1).jpg";

interface CardProps {
  cardData: {
    index: number;
    title: string;
    content: string;
    image?: string;
  }[];
  classNames?: string;
}

const Card = ({ cardData, classNames }: CardProps) => {
  return (
    <div
      className={getClassNames([
        "flex gap-16 w-full static mx-auto justify-center",
        classNames,
      ])}
    >
      {cardData.map((index) => (
        <div
          key={index.index}
          className="w-80 h-52 bg-white/90 backdrop-blur-xl  shadow-lg shadow-blue/40 rounded-lg items-center  flex  "
        >
          {index.image && (
            <Image src={BgImage} fill alt="خیزیه" className="relative" />
          )}
          <div className="absolute h-full text-center px-7 ">
            <h3 className="text-2xl font-extrabold my-5 text-blue">
              {index.title}
            </h3>
            <p className="text-base text-gray-900 font-semibold  ">
              {index.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
