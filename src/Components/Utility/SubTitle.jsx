import React from "react";
import { NavLink } from "react-router-dom";

export default function SubTitle({ title, button, link }) {
  return (
    <div className="flex justify-between items-center font-bold my-6">
      <div className="title text-neutral-600 text-xl">{title}</div>
      {button ? (
        <NavLink
          to={link}
          className="px-5 py-px rounded-lg border border-neutral-600 text-neutral-600 text-xl duration-500 hover:bg-neutral-600 hover:text-stone-50"
        >
          <button>{button}</button>
        </NavLink>
      ) : null}
    </div>
  );
}
