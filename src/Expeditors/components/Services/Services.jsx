import React from "react";
import { serviceData } from "../../data";
import "./Services.css";

const Services = () => {
  return (
    <>
      <section className="service" id="service">
        <div className="sectionContainer">
          <div
            data-aos="fade-up"
            data-aos-duration={500}
            className="serviceUpperPart"
          >
            <h2 className="sectionSubHeader">ALL SERVICES</h2>
            <h1 className="sectionHeader">Trusted For Our Services</h1>
            <p className="sectionIntro">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry the standard dummy text ever since the when an printer
              took.
            </p>
          </div>

          <div className="serviceContainer">
            {serviceData.map((srv, i) => (
              <div
                className="serviceBox"
                key={i}
                data-aos="zoom-in"
                data-aos-duration={500}
              >
                <img src={srv.photo} alt="" />
                <h2>
                  <span>{srv.sl}</span>
                  <span>{srv.title}</span>
                </h2>
                <p>{srv.desc}</p>
                <a href="#">View Detail</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
