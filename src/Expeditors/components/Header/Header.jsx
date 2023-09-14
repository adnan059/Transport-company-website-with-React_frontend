import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      if (window.scrollY > 90) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", checkScreen);

    () => window.removeEventListener("scroll", checkScreen);
  }, []);

  return (
    <>
      <header id="home" className={isScrolled ? "scrolled" : null}>
        <nav>
          <h1 className="logo">Expeditors</h1>

          <ul className="navList">
            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#about">about</a>
            </li>

            <li>
              <a href="#service">service</a>
            </li>

            <li>
              <a href="#blog">blog</a>
            </li>

            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>

          <div className="call">
            <div className="freeCall">
              <p>Free Call in USA</p>
              <a href="tel:123xx">12345**61</a>
            </div>
            <i className="fa-solid fa-phone"></i>
            <i
              className="bar fa-solid fa-bars"
              ref={btnRef}
              onClick={onOpen}
            ></i>
          </div>
        </nav>

        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
          size={"md"}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>
              <h1 className="logo">Expeditors</h1>
              <i
                onClick={onClose}
                className="cross fa-regular fa-circle-xmark"
              ></i>
            </DrawerHeader>

            <DrawerBody>
              <ul className="navList">
                <li>
                  <a href="#home">
                    <span>home</span> <span> &gt; </span>
                  </a>
                </li>

                <li>
                  <a href="#about">
                    <span>about</span> <span> &gt; </span>
                  </a>
                </li>

                <li>
                  <a href="#service">
                    <span>service</span> <span> &gt; </span>
                  </a>
                </li>

                <li>
                  <a href="#blog">
                    <span>blog</span> <span> &gt; </span>
                  </a>
                </li>

                <li>
                  <a href="#contact">
                    <span>contact</span> <span> &gt; </span>
                  </a>
                </li>
              </ul>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </header>
    </>
  );
};

export default Header;
