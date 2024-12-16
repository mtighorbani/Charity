import React from "react";

//app
import getClassNames from "@/utils/getClassName";

interface TextBoxProps {
  children: string;
  className?: string;
  title?: string;
}

const TextBox = (props: TextBoxProps) => {
  return (
    <div
      className={getClassNames([
        " text-center  ring-1 rounded-lg  p-10 max-w-[60%] mx-auto ",
        props.className,
      ])}
    >
      <h1 className=" mb-5 text-3xl font-extrabold">
        <span className="text-blue">{props.title}</span>
      </h1>
      <p className="font-medium text-lg">{props.children}</p>
    </div>
  );
};

export default TextBox;
