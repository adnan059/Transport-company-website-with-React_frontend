import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="sectionContainer">
          <div className="footerContainer">
            <div className="footerBox">
              <h2>Expeditors</h2>
              <p>
                Many desktop publishing packages and web page editors now use
                are dolra Ipsum as their default.
              </p>
              <div className="icons">
                <a href="https://www.facebook.com">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="https://www.twitter.com">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="footerBox">
              <p>Quick Links</p>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#blog">Blog</a>
              <a href="#projects">Project</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footerBox">
              <p>Services</p>
              <a href="#">Warehouse</a>
              <a href="#">Air Freight</a>
              <a href="#">Road Freight</a>
              <a href="#">Ocean Freight</a>
              <a href="#">Packaging</a>
            </div>

            <div className="footerBox">
              <p>Community</p>
              <a href="#">Business Consulting</a>
              <a href="#">Testimonials</a>
              <a href="#">Track Your Shipment</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>

          <p className="credit">
            Designed By&nbsp;
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100091858671661"
              rel="noreferrer"
            >
              Md Adnan Faruk
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
