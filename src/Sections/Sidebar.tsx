import React from "react";

const Sidebar = () => {
  return (
    // sidebar
    <aside id="side-nav">
      <div className="side-nav__content">
        <div className="side-nav__content--logo">
          <img src="img/logo-01.jpg" alt="logo" />
        </div>
        <ul className="side-nav__content--social">
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
          <a href="https://www.linkedin.com/in/govind-kumar-9242ba250/">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="https://leetcode.com/u/govind-kumar/">
            <i className="fa-solid fa-code"></i>
          </a>
          <a href="https://github.com/govind-kumarr">
            <i className="fa-brands fa-github"></i>
          </a>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
