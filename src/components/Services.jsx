import React from "react";
import service2 from "../assets/client2.jpg"
import service1 from "../assets/client3.jpg"
import service3 from "../assets/client4.jpg"

const Services = () => {
  return (
    <div className="service py-5">
      <div className="container">
        <h2>Our Services</h2>
        <div className="row g-4 mt-3">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="client-img text-center">
              <img src={service1} alt="Client" />
            </div>
            <div className="service-content mt-5">
              <h5>DIGITAL MARKETING, AI AUTOMATION</h5>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="client-img text-center">
              <img src={service2} alt="Client" />
            </div>
            <div className="service-content mt-5">
              <h5>Web Design & Development</h5>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="client-img text-center">
              <img src={service3} alt="Client" />
            </div>
            <div className="service-content mt-5">
              <h5>SEO Optimization, App building</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
