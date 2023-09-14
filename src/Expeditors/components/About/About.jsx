import React from "react";
import aboutBanner from "../../assets/images/about-banner.jpg";
import aboutShape1 from "../../assets/images/about-shape-1.png";
import aboutShape2 from "../../assets/images/about-shape-2.png";
import "./About.css";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="sectionContainer" style={{ overflowX: "hidden" }}>
          <div
            className="aboutImages"
            data-aos="fade-right"
            data-aos-duration={500}
          >
            <img src={aboutShape2} alt="" className="aboutShape2" />
            <img src={aboutShape1} alt="" className="aboutShape1" />
            <img src={aboutBanner} alt="" className="aboutBanner" />
          </div>
          <div
            className="aboutContent"
            data-aos="fade-left"
            data-aos-duration={500}
          >
            <h2 className="sectionSubHeader">WHY CHOOSE US</h2>
            <h1 className="sectionHeader">
              We Are Professional Logistics & cargo Agency
            </h1>
            <p className="sectionIntro">
              Sed ut perspiciatis unde omnis iste natus error volup tatem
              accusantium dolorem que laudantium, totam inventore.
            </p>

            <ul>
              <li>
                <i className="fa-solid fa-caret-right"></i>
                <span>
                  Go beyond logistics, make the world go round and revolutionize
                  business.
                </span>
              </li>
              <li>
                <i className="fa-solid fa-caret-right"></i>
                <span>
                  Logistics through innovation, dedication, and technology.
                  ready, set, done.
                </span>
              </li>

              <li>
                <i className="fa-solid fa-caret-right"></i>
                <span>
                  We take pride in serving our customers safely. together with
                  passion.
                </span>
              </li>

              <li>
                <i className="fa-solid fa-caret-right"></i>
                <span>
                  Imagination what we can easily see is only a small percentage.
                </span>
              </li>

              <li>
                <i className="fa-solid fa-caret-right"></i>
                <span>
                  Quality never goes out of style. safety, quality,
                  professionalism.
                </span>
              </li>

              <li>
                <i className="fa-solid fa-caret-right"></i>
                <span>
                  The quality shows in every move we make where business lives.
                </span>
              </li>
            </ul>

            <button className="secBtn">Learn More</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
