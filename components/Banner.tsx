import React from "react";

function Banner() {
  return (
    <div className="p-[130px] text-center bg-cover bg-[url('/images/banner.png')]">
      <h1 className="text-white text-5xl font-medium">ChatGPT Made Easy</h1>
      <h3 className="font-light mb-[35px] text-white">
        Experience the next generation search
      </h3>
      <a
        href="#"
        className="text-white font-normal max-w-[400px] my-12 py-4 px-12 text-center rounded-[3px] bg-x-blue"
      >
        Get Started
      </a>
    </div>
  );
}

export default Banner;
