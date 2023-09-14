import React from "react";
import nws from "../../assets/images/newsletter-banner.png";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <>
      <div className="newsl" id="newsl">
        <div className="sectionContainer">
          <div className="newslContainer">
            <div
              className="newslImage"
              data-aos="fade-down"
              data-aos-duration={500}
            >
              <img src={nws} alt="" />
            </div>

            <h1 data-aos="zoom-out" data-aos-duration={500}>
              Subscribe for Offers & News
            </h1>

            <div
              className="inputBox"
              data-aos="zoom-in"
              data-aos-duration={500}
            >
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter Your Email"
              />
              <p>Subscribe</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
