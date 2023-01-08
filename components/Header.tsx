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
    <header className={`${!open ? '' : 'active'} absolute z-999 w-full md:py-6 sm:p-0 sm:bg-white`}>
      <div className="w-full max-w-6xl m-0">
        {/** logo */}
          <a href="/">
            <img
              src="images/logo.svg"
              alt="logo"
            />
          </a>

        {/** hidden button for mobile version */}
        <button
          id="submenu"
          onClick={handleClick}
        >
          {!open ? <Bars3BottomLeftIcon /> : <XMarkIcon />}
        </button>

        {/** left side menu */}
        <ul
          className='menu-left'
        >
          {items.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.href ?? "#"}>{item.text}</a>
              </li>
            );
          })}
        </ul>

        {/** right side menu */}
        <ul className="menu-right">
        <li className="menu-cta">
                <a href="#">
                    Get Started
                </a>
            </li>
        </ul>

      </div>
    </header>
  );
}

export default Header;
