import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function ButtonRight(onClick, onDisable) {
  return (
    <FaRegArrowAltCircleRight
      className="w-9 h-9 float-right mt-44 cursor-pointer text-neutral-700 hover:text-neutral-900 duration-500"
      onClick={onClick}
      // onDisable={onDisable}
    />
  );
}
