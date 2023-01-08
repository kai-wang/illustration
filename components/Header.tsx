import React from "react";

function Header() {
  return (
    <header className="absolute z-999 w-full py-4">
      <div className="w-full flex items-center justify-between mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <a href="/" className="no-underline">
            <img
              className="w-40 -ml-3 pr-20 py-2"
              src="images/logo.svg"
              alt="logo"
            />
          </a>
        </div>
        <ul className="mx-auto flex">
          <li className="px-5 inline-block">
            <a href="#">How we function?</a>
          </li>
          <li className="px-5 inline-block">
            <a href="#">Services</a>
          </li>
          <li className="px-5 inline-block">
            <a href="#">Pricing</a>
          </li>
          <li className="px-5 inline-block">
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul className="flex">
          <a href="/" className="text-red-600 font-medium">
            <li className="w-[120px] p-2 rounded-[3px] text-center bg-white shadow-md">
              Get Started
            </li>
          </a>
        </ul>
      </div>
    </header>
  );
}

export default Header;
