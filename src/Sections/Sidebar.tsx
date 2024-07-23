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
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="#">
            <i className="fab fa-instagram" />
          </a>
          <a href="#">
            <i className="fab fa-dribbble" />
          </a>
          <a href="#">
            <i className="fab fa-pinterest-p" />
          </a>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
