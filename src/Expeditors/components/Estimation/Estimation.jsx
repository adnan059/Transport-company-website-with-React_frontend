import React from "react";
import { estimData } from "../../data";
import "./Estimation.css";

const Estimation = () => {
  return (
    <>
      <section className="estim" id="estimation">
        <div className="sectionContainer">
          <div className="estim1" style={{ overflowX: "hidden" }}>
            <div
              data-aos="fade-right"
              data-aos-duration={500}
              className="estim1Content"
            >
              <h2 className="sectionSubHeader">ESTIMATION</h2>
              <h1 className="sectionHeader">Has a wide range of solutions</h1>
              <p className="sectionIntro">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate fugit beatae eveniet facilis temporibus tenetur, quod
                voluptatem.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration={500}
              className="estim1Btn"
            >
              <button className="secBtn">Read More</button>
            </div>
          </div>
          <div className="estim2">
            {estimData.map((estm, i) => (
              <div
                data-aos="fade-up"
                data-aos-duration={500}
                className="estim2Box"
                key={i}
              >
                <h1>{estm.sl}</h1>
                <div className="image">
                  <img src={estm.pic} alt="" />
                </div>
                <h2>{estm.title}</h2>
                <p>{estm.desc}</p>
                <span>
                  {" "}
                  <i className="fa-solid fa-angles-right"></i>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Estimation;
