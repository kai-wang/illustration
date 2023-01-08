import React from "react";

function Banner() {
  return (
    <div className="p-[130px] text-center bg-cover bg-[url('/images/banner.png')]">
      <h1 className="text-white text-5xl font-medium">ChatGPT Made Easy</h1>
      <h3 className="font-light mb-8 text-white mt-4 text-lg">
        Experience the next generation search
      </h3>
      <a
        href="#"
        className="text-white font-normal max-w-[400px] my-12 py-4 px-12 text-center rounded-[3px] bg-blue-1"
      >
        Get Started
      </a>
    </div>
  );
}

export default Banner;
