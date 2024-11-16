import React from "react";
import getClassNames from "@/utils/getClassName";

interface BlurTextProps {
  className?: string;
  textClassName?: string;
  text: string;
}
const BlurTextBox = ({ className, text, textClassName }: BlurTextProps) => {
  return (
    <div
      className={getClassNames([
        " max-w-[30%] backdrop-blur-xl min-h-12 py-4 px-7 rounded-lg text-center static ",
        className,
      ])}
    >
      <p className={getClassNames([" text-2xl font-extrabold", textClassName])}>
        {text}
      </p>
    </div>
  );
};

export default BlurTextBox;
