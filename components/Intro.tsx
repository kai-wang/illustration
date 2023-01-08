import React from "react";

function Intro() {
  return (
    <section
      id="intro"
      className="relative overflow-hidden min-h-[600px] pt-40"
    >
      <div className="top-right-gradient"></div>
      <div className="w-full max-w-6xl mx-auto">
        <div className="intro-left">
          <h1>Creative Insights to grow your Business</h1>
          <p>
            The world’s most widely deployed real-time content recommendations
            engine
          </p>
          <a href="#" className="intro-cta">
            Try it for free
          </a>
        </div>
        <div className="relative inline-block ml-24 pt-20">
          <img
            className="max-w-[650px]"
            src="images/undraw_growth_analytics_8btt.png"
            alt=""
          />
        </div>
      </div>
      <div className="absolute bottom-2 left-n-9 w-48 h-48 rounded-1/2 bg-gradient-to-tr from-fuchsia-400 to-cyan-500"></div>
    </section>
  );
}

export default Intro;
