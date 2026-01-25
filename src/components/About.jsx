import React from "react";
import aboutImg from "../assets/about.png";

const About = () => {
  return (
    <>
      <section className="about py-5">
        <div className="container">
          <div className="row g-3 align-items-stretch">
            <div className="col-lg-6 h-100 ">
              <div className="about_img">
                <img src={aboutImg} alt="About Us" />
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="about_content d-flex flex-column justify-content-center">
                <h2>About Us</h2>
                <p>
                  NextWave Digital transforms ambitious brands through
                  cutting-edge web development, mobile apps, and data-driven SEO
                  strategies. We move beyond standard templates to build custom
                  digital ecosystems that outperform the competition. Choose us
                  for innovative solutions that not only look exceptional but
                  are engineered to capture leads and drive sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
