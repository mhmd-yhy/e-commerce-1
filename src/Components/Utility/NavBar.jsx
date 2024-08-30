import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import logo from "../../assets/images/logo.png";
import { FaRegUserCircle } from "react-icons/fa";

export default function NavBar() {
  const [menuMood, setMenuMood] = useState("max-h-0 py-0");

  return (
    <div className="navbar bg-zinc-800 sticky top-0 left-0 z-40">
      <div className="container m-auto p-4 xl:px-36">
        <div className="flex justify-between sm:justify-start gap-5 items-center">
          <div className="logo text-lg">
            <NavLink to={"/"}>
              <img src={logo} alt="" className="w-16" />
            </NavLink>
          </div>
          <div
            style={{ position: "" }}
            className={`${menuMood} absolute sm:relative sm:max-h-10 w-full top-full left-0 duration-500 p-2 sm:py-0 bg-zinc-800 sm:flex gap-5 items-center justify-between flex-grow overflow-hidden`}
          >
            <input
              type="text"
              placeholder="بحث..."
              className={`p-3 w-full text-neutral-600 rounded-2xl flex-grow placeholder:text-center placeholder:text-neutral-600 outline-none text-center overflow-hidden`}
            />
            <ul className="list-none flex flex-col sm:flex-row gap-5 mt-4 sm:mt-0">
              <li>
                <NavLink
                  to={"/login"}
                  className={
                    "flex gap-1 justify-center items-center text-stone-50 cursor-pointer"
                  }
                  onClick={() => setMenuMood("max-h-0 py-0")}
                >
                  <i>
                    <FaRegUserCircle />
                  </i>
                  <span>دخول</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/shopping-cart"}
                  className={
                    "flex gap-1 justify-center items-center text-stone-50 cursor-pointer"
                  }
                  onClick={() => setMenuMood("max-h-0 py-0")}
                >
                  <i>
                    <MdOutlineShoppingCart />
                  </i>
                  <span>العربة</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div
            className="menu-icon text-zinc-500 sm:hidden text-4xl cursor-pointer"
            onClick={() =>
              setMenuMood(
                menuMood === "max-h-0 py-0" ? "max-h-72 py-6" : "max-h-0 py-0"
              )
            }
          >
            <IoMdMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
