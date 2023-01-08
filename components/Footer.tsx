import React from "react";
import config from "../data/config.json"

function Footer() {
  const items = config.footers;

  return (
    <footer className="bg-white text-left py-[50px]">
      <div className="max-w-6xl mx-auto grid grid-cols-10">
        <div className="col-span-4">
          <a href="/">
            <img src="images/logo.svg" alt="logo" />
          </a>
          <p className="text-blue-1 my-6 text-sm block">
            {items.map((item, index) => {
              return(
                <a key={index} className="inline-block pr-8" href="#">
                  {item.text}
                </a>
              )
            })}
          </p>
          <p className="text-red-1 text-sm mt-[30px]"> © 2022 - Made By K</p>
        </div>
        <div className="col-span-4">
          <div>
            <i className="footer-icon"></i>
          </div>
        </div>
        <div className="col-span-2">
          <p className="footer-connect">
            <span>Connect with us</span> Contact us to get Started.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
