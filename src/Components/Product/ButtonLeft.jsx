import React from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

export default function ButtonLeft(onClick, onDisable) {
  return (
    <FaRegArrowAltCircleLeft
      className="w-9 h-9 float-left mt-44 cursor-pointer text-neutral-700 hover:text-neutral-900 duration-500"
      onClick={onClick}
      // onDisable={onDisable}
    />
  );
}
