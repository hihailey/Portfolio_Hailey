import React from "react";
// import { Link } from "react-router-dom";
import logo from "./logo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import moon from "../../img/moon.png";

const Navbar = () => {
  return (
    <div className="Nav">
      <div className="Navlogo">
        <img src={logo} />
      </div>

      <ul>
        <Link className="link" to="home">
          Home
        </Link>
      </ul>
      <ul>
        <Link
          className="link"
          // spy={true}
          // smooth={true}
          // offset={50}
          // duration={500}
          to="about"
        >
          About
        </Link>
      </ul>
      <ul>
        <Link
          className="link"
          // spy={true}
          // smooth={true}
          // offset={50}
          // duration={500}
          to="skill"
        >
          Skills
        </Link>
      </ul>
      <ul>
        <Link className="link" to="projects">
          Projects
        </Link>
      </ul>
      <ul>
        <Link
          className="link"
          // spy={true}
          // smooth={true}
          // offset={50}
          // duration={500}
          to="contact"
        >
          Contact
        </Link>
      </ul>
      <ul>
        <a href="https://www.linkedin.com/in/developer-haileykim/">
          <img src={moon} />
        </a>
      </ul>
    </div>
  );
};
export default Navbar;
