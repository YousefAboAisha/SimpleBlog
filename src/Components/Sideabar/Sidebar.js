import React from "react";
import { Link } from "react-router-dom";
import classes from "./Sidebar.module.css";

const SideBar = ({ toggle, setToggle }) => {
  console.log(toggle);
  return (
    <div
      className={classes.nav}
      style={{
        transform: toggle ? "translateX(0)" : "translateX(100%)",
      }}
    >
      <Link to="personalBlog" onClick={() => setToggle(false)}>
        Home
      </Link>

      <Link to="services" onClick={() => setToggle(false)}>
        Projects
      </Link>

      <Link to="contact" onClick={() => setToggle(false)}>
        Contact Me
      </Link>
      <i className="fas fa-fire"></i>

      <div className={classes.social}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/yousef.aboesha.9/"
        >
          <i className="fab fa-facebook"></i>
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/yousef-aboesha-9b40b4193/"
        >
          <i className="fab fa-linkedin"></i>
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/_abuAisha"
        >
          <i className="fab fa-twitter"></i>
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/YousefAboAisha"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
      <span> All Rights Reserved To Yousef R Abo Aisha ©</span>
    </div>
  );
};

export default SideBar;
