import React from "react";
import config from "../data/config.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"

function Footer() {
  const items = config.footers;
  const links = [faFacebook, faTwitter, faLinkedin, faInstagram];

  return (
    <footer className="bg-white text-left py-[50px] sm:font-bold sm:text-sm sm:py-5">
      <div className="max-w-6xl mx-auto md:flex md:items-center sm:block">
        <div className="md:flex-col md:flex-grow sm:w-full sm:mb-4 sm:text-center">
          <a href="/" className="sm:text-center">
            <img src="images/logo.svg" alt="logo" className="w-10" />
          </a>
          <p className="text-blue-1 my-6 text-sm block">
            {items.map((item, index) => {
              return (
                <a key={index} className="inline-block pr-8" href="#">
                  {item.text}
                </a>
              );
            })}
          </p>
          <p className="text-red-1 text-sm mt-[30px]"> © 2022 - Made By K</p>
        </div>
        <div className="md:flex-col md:flex-grow sm:w-full sm:mb-4 sm:text-center">
          <div>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="bg-white text-red-1 w-4 h-4 text-center leading-10 my-[10px] mx-[15px] align-middle inline-block sm:hidden" />
            <p className="inline-block text-blue-1 align-middle m-0 text-base"><span>400</span>George Street, Sydney, NSW, 2000</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} className="bg-white text-red-1 w-4 h-4 text-center leading-10 my-[10px] mx-[15px] align-middle inline-block sm:hidden" />
            <p className="inline-block text-blue-1 align-middle m-0 text-base"><span className="block font-normal leading-8">1800 5678 9182</span></p>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} className="bg-white text-red-1 w-4 h-4 text-center leading-10 my-[10px] mx-[15px] align-middle inline-block sm:hidden" />
            <p className="inline-block text-blue-1 align-middle m-0 text-base"><span>xxxx@company.com</span></p>
          </div>
        </div>
        <div className="md:flex-col sm:w-full sm:mb-4 sm:text-center">
          <p className="leading-5 text-blue-1 text-xs font-normal m-0">
            <span className="block text-red-1 text-base font-bold mb-5">Connect with us</span> Contact us to get Started.
          </p>
          <div className="mt-6">
            {links.map((item, index) => {
              return (
                <a
                  key={index}
                  href="#"
                  className="inline-block w-6 h-6 cursor-pointer bg-white rounded-sm text-red-1 text-center -ml-2 text-lg mx-4 leading-8"
                >
                  <FontAwesomeIcon icon={item} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
