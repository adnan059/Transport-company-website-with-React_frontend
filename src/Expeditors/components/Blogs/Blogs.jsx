import React from "react";
import blg1 from "../../assets/images/blog-1.jpg";
import blg2 from "../../assets/images/blog-2.jpg";
import "./Blogs.css";

const Blogs = () => {
  return (
    <>
      <section className="blogs" id="blog">
        <div className="sectionContainer">
          <div className="blogUpper" data-aos="fade-up" data-aos-duration={500}>
            <h2 className="sectionSubHeader">OUR BLOGS</h2>
            <h1 className="sectionHeader">Recent news & events</h1>
            <p className="sectionIntro">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              deserunt ratione repudiandae animi impedit possimus aspernatur,
              quaerat similique.
            </p>
          </div>
          <div className="blogsContainer" style={{ overflowX: "hidden" }}>
            <div
              className="blogBox"
              data-aos="fade-right"
              data-aos-duration={500}
            >
              <div className="blogBoxImage">
                <img src={blg1} alt="" />
                <h2 className="date">
                  <span>02</span>
                  <span className="mnth">Aug</span>
                </h2>
                <div className="orngbg"></div>
              </div>
              <div className="blogContent">
                <h2>
                  At the end of the day, going forward, a new normal that has
                  evolved from. your only logistic partner.
                </h2>
                <p>
                  New chip traps clusters of migrating tumor cells
                  asperiortenetur, blanditiis odit. typesetting industry the
                  standard dummy text ever since the when an printer.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration={500}
              className="blogBox"
            >
              <div className="blogBoxImage">
                <img src={blg2} alt="" />
                <h2 className="date">
                  <span>20</span>
                  <span className="mnth">Sep</span>
                </h2>
                <div className="orngbg"></div>
              </div>
              <div className="blogContent">
                <h2>
                  Going forward, a new normal that has evolved from generation.
                  moving your products across all borders.
                </h2>
                <p>
                  New chip traps clusters of migrating tumor cells
                  asperiortenetur, blanditiis odit. typesetting industry the
                  standard dummy text ever since the when an printer.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
