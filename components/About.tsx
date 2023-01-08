import React from "react";

function About() {
  return (
    <section id="about" className="md:relative md:overflow-hidden md:min-h-[600px] sm:text-center sm:py-0 sm:px-2 sm:-ml-40 sm:flex sm:h-full sm:flex-col sm:justify-around">
      <div className="w-full max-w-6xl mx-auto">
        <div className="md:inline-block">
          <img
            className="md:pb-2 md:max-w-[500px] sm:hidden"
            src="images/undraw_report_mx0a.svg"
            alt=""
          />
        </div>
        <div className="inline-block w-full max-w-[400px] ml-40 about-right">
          <h1>How we help YOU grow your Businesses</h1>
          <p>
            Consume out-of-the-box data analytics anywhere, anytime. Take
            advantage of rich domain content , pre-built industry metrics,
            stunning visualizations, and data adaptors for cloud/business
            applications as well as big data sources.
          </p>
          <a href="#" className="cta">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
