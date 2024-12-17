import getClassNames from "@/utils/getClassName";
import React from "react";

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
        "flex flex-wrap justify-center gap-4 sm:gap-8 mx-auto w-full",
        classNames,
      ])}
    >
      {cardData.map((item, idx) => (
        <div
          key={item.index}
          className={getClassNames([
            "relative w-[45%] sm:w-72 max-lg:h-52 md:w-80 h-64 bg-white/90 backdrop-blur-xl shadow-lg shadow-blue/40 rounded-lg flex items-center",
            idx === 2 && "hidden sm:flex",
          ])}
        >
          <div className="absolute h-full text-center px-7  flex flex-col justify-center">
            <h3 className="text-2xl max-lg:text-xl font-extrabold my-3 text-blue">
              {item.title}
            </h3>
            <p className="text-base max-lg:text-sm  text-gray-900 font-semibold">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
