import React from "react";

import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="footer bg-white">
      <div className="container m-auto p-4 pb-10 md:pb-4 xl:px-36">
        <div className="flex justify-center md:justify-between items-center flex-wrap gap-5">
          <div className="conditions flex items-center">
            <NavLink className="text-neutral-500 text-sm ml-3">
              الشروط والأحكام
            </NavLink>
            <NavLink className="text-neutral-500 text-sm ml-3">
              سياسة الخصوصية
            </NavLink>
            <NavLink className="text-neutral-500 text-sm ml-3">
              اتصل بنا
            </NavLink>
          </div>

          <div className="social flex items-center">
            <NavLink className="text-neutral-500 ml-2 flex items-center">
              <i className="ml-1">
                <FaPhone />
              </i>
              05366751348
            </NavLink>
            <NavLink className="text-neutral-500 ml-2">
              <i>
                <FaTwitter />
              </i>
            </NavLink>
            <NavLink className="text-neutral-500 ml-2">
              <i>
                <FaFacebook />
              </i>
            </NavLink>
            <NavLink className="text-neutral-500 ml-2">
              <i>
                <FaInstagram />
              </i>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
