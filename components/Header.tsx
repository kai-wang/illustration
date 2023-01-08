import React, { useState } from "react";
import config from "../data/config.json";
import { XMarkIcon, Bars3BottomLeftIcon } from "@heroicons/react/24/solid";

function Header() {
  const items = config.headers;
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <header
      className={`${
        !open ? "" : "active"
      } absolute z-999 w-full md:py-6 sm:p-0 sm:bg-white`}
    >
      <div className="w-full max-w-6xl mx-auto md:flex md:items-center md:justify-between sm:block">
        {/** logo */}
        <a href="/">
          <img
            className="w-[160px] -ml-3 pt-3 pr-20 pb-5 pl-0 sm:ml-5"
            src="images/logo.svg"
            alt="logo"
          />
        </a>

        {/** hidden button for mobile version */}
        <button
          id="submenu"
          onClick={handleClick}
          className="md:hidden sm:absolute sm:top-3 sm:right-6 sm:block sm:w-8 sm:h-10 sm:pt-2 sm:bg-white"
        >
          {!open ? <Bars3BottomLeftIcon /> : <XMarkIcon />}
        </button>

        {/** left side menu */}
        <ul className={!open ? "sm:hidden" : "sm:block"}>
          {items.map((item, index) => {
            return (
              <li
                key={index}
                className="md:inline-block md:p-5 sm:block sm:py-3 sm:px-5"
              >
                <a
                  href={item.href ?? "#"}
                  className="text-blue-1 transition ease-in delay-100 hover:text-red-1"
                >
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>

        {/** right side menu */}
        <ul className="sm:hidden">
          <li className="w-[150px] mt-3 p-2 transition ease-in-out delay-200 text-center rounded-sm bg-white shadow-md">
            <a href="#" className="font-medium text-red-1">
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
