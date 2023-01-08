import React from "react";

function Intro() {
  return (
    <section
      id="intro"
      className="relative overflow-hidden min-h-[600px] pt-36 sm:max-h-[300px] sm:text-center sm:flex sm:h-full sm:flex-col sm:justify-around sm:mt-10"
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
        <div className="intro-right">
          <img src="images/undraw_growth_analytics_8btt.png" alt="image" />
        </div>
      </div>
      <div className="bottom-left-gradient"></div>
    </section>
  );
}

export default Intro;
