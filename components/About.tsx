import React from "react";

function About() {
  return (
    <section id="about" className="relative overflow-hidden min-h-[600px]">
      <div className="w-full max-w-6xl mx-auto">
        <div className="inline-block">
          <img
            className="pb-2 max-w-[500px]"
            src="images/undraw_report_mx0a.svg"
            alt=""
          />
        </div>
        <div className="about-right">
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
