import React from "react";

interface CardProps {
  cardData: {
    index: number;
    title: string;
    content: string;
  }[];
}

const Card = ({ cardData }: CardProps) => {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-14 flex gap-16 w-full justify-center z-20">
      {cardData.map((index) => (
        <div
          key={index.index}
          className="max-w-72 h-48 bg-white/90 backdrop-blur-xl  shadow-lg rounded-lg p-4 flex flex-col gap-5  items-center"
        >
          <h3 className="text-2xl font-extrabold text-blue self-start">
            {index.title}
          </h3>
          <p className="text-base text-gray-900 self-center font-semibold">
            {index.content}.
          </p>
        </div>
      ))}
    </div>
  );
};

export default Card;
