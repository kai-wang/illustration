import React from "react";

function Footer() {
  return (
    <footer className="bg-white text-left py-[50px]">
      <div className="max-w-6xl mx-auto grid grid-cols-10">
        <div className="col-span-4">
          <a href="/">
            <img src="images/logo.svg" alt="logo" />
          </a>
          <p className="text-x-blue my-6 text-sm block">
            <a className="inline-block pr-8" href="#">
              About
            </a>
            <a className="inline-block pr-8" href="#">
              Servces
            </a>
            <a className="inline-block pr-8" href="#">
              Pricing
            </a>
            <a className="inline-block pr-8" href="#">
              Contact
            </a>
          </p>
          <p className="text-x-red text-sm mt-[30px]"> © 2022 - Made By K</p>
        </div>
        <div className="col-span-4">
          <div>
            <i className="footer-icon"></i>
          </div>
        </div>
        <div className="col-span-2">
          <p className="text-x-blue m-0">
            <span>Connect with us</span> Contact us to get Started.
          </p>
          <div className="mt-[25px]">
            <a
              href="#"
              className="inline-block cursor-pointer bg-white text-x-red text-center"
            >
              <i className="before:content-['\f08c']"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
