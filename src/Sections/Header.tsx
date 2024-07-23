import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  return (
    // Main Header
    <header id="header">
      <nav id="header__main-nav">
        <div className="header__main-nav--hamburger">
          <div className="line line-1" />
          <div className="line line-2" />
          <div className="line line-3" />
        </div>
        <ul className="header__main-nav--links">
          <li>
            <a href="">
              <Link to="main" smooth={true} duration={500}>
                Home
              </Link>
            </a>
          </li>
          <li>
            <a href="">
              <Link to="about-me" smooth={true} duration={500}>
                About Me
              </Link>
            </a>
          </li>
          <li>
            <a href="">
              <Link to="testimonials" smooth={true} duration={500}>
                Projects
              </Link>
            </a>
          </li>
          <li>
            <a href="">
              <Link to="services" smooth={true} duration={500}>
                Services
              </Link>
            </a>
          </li>
          <li>
            <a href="">
              <Link to="about-me" smooth={true} duration={500}>
                Hire Me
              </Link>
            </a>
          </li>
          <li>
            <a href="">
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
