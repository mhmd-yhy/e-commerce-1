import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
import logo from "../../assets/images/logo1.png";
import { FaRegUserCircle } from "react-icons/fa";
import NavBarSearchHook from "../../Custom Hooks/search/NavBarSearchHook";
import GetAllCartItemsHook from "../../Custom Hooks/shopping cart/GetAllCartItemsHook";

export default function NavBar() {
  const [menuMood, setMenuMood] = useState("max-h-0 py-0");
  const [searchWord, onChangeSearch, dropdownMood, handleDropdownClick] = NavBarSearchHook();
  const [products, numOfCartItems, totalCartPrice] = GetAllCartItemsHook();

  let word; let userIsLogged;
  localStorage.getItem("searchWord") !== null ? word = localStorage.getItem("searchWord") : word = '';
  localStorage.getItem("userData") !== null && (userIsLogged = JSON.parse(localStorage.getItem("userData")));
  return (
    <div className="navbar bg-zinc-800 sticky top-0 left-0 z-40">
      <div className="container m-auto p-4 xl:px-36">
        <div className="flex justify-between sm:justify-start gap-5 items-center">
          <div className="logo text-lg">
            <NavLink to={"/"}>
              <img src={logo} alt="" className="w-20 h-14" />
            </NavLink>
          </div>
          <div
            style={{ position: "" }}
            className={`${menuMood} absolute sm:relative sm:max-h-10 w-full top-full left-0 duration-500 p-2 sm:py-0 bg-zinc-800 sm:flex gap-5 items-center justify-between flex-grow overflow-hidden sm:overflow-visible`}
          >
            <input
              value={word}
              onChange={onChangeSearch}
              type="text"
              placeholder="بحث..."
              className={`p-3 w-full text-neutral-600 rounded-2xl flex-grow placeholder:text-center placeholder:text-neutral-600 outline-none text-center overflow-hidden`}
            />
            <ul className="list-none flex flex-col sm:flex-row gap-5 mt-4 sm:mt-0">
              <li>
                {userIsLogged
                  ? (<div className="sort-Dropdown relative flex gap-1 justify-center items-center">
                    <button
                      className="text-stone-50 font-bold flex justify-center items-center gap-2 text-base"
                      onClick={handleDropdownClick}
                      data-sort=""
                    ><IoIosArrowDown />{userIsLogged.name}
                    </button>
                    <ul
                      className={` bg-zinc-800 absolute top-full sm:left-0 cursor-pointer rounded-lg duration-500 w-44 text-base shadow-lg ${dropdownMood}`}>
                      <NavLink
                        to={userIsLogged.role === "user" ? "/user/profile" : "/admin/products-managment"}
                        className="text-stone-300 text-sm text-center sm:text-start font-bold hover:bg-zinc-700 duration-500 py-1 sm:p-2 block"
                        data-value="profile" onClick={handleDropdownClick}>
                        {userIsLogged.role === "user" ? "الصفحة الشخصية" : "لوحة التحكم"}
                      </NavLink>
                      <li
                        className="text-stone-300 text-sm text-center sm:text-start font-bold hover:bg-zinc-700 duration-500 py-1 sm:p-2"
                        onClick={() => handleDropdownClick("logout")}>
                        تسجيل الخروج
                      </li>
                    </ul>
                  </div>)
                  : (<NavLink to={"/login"} className={"flex gap-1 justify-center items-center text-stone-50 cursor-pointer"}
                    onClick={() => setMenuMood("max-h-0 py-0")}> <i> <FaRegUserCircle /> </i>
                    <span>دخول</span>
                  </NavLink>)}
              </li>
              <li>
                <NavLink to={"/shopping-cart"} className={"flex gap-1 justify-center items-center text-stone-50 cursor-pointer"} onClick={() => setMenuMood("max-h-0 py-0")} >
                  <i>
                    <MdOutlineShoppingCart />
                  </i>
                  <span className="relative"> <span className="absolute -bottom-2 -right-7 bg-red-800 px-1 text-xs rounded-full">{numOfCartItems}</span>العربة</span>
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
