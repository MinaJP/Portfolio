import React from "react";
import { Link } from "react-scroll";
// SCSS
import "./navbar.scss";
// Assets
import CloseIcons from '../../assets/navbar/mobile-close.svg';
import Logo from "../../assets/navbar/logo-yellow.svg";

const mobileNav = (props) => (
  <div className={`mobile__navbar ${props.isOpen ? "mobile__open" : ""}`}>
    <div className="mobile__navbar-close" onClick={props.closeMobileMenu}>
      <img src={CloseIcons} alt="close" />
    </div>
   
    <div className="mobile__navbar-menu">
      <ul>
      <li className="flex-center">
      <Link
      activeClass="active-link"
        to="hero"
        spy={false}
        smooth={true}
        offset={0}
      
        onClick={props.closeMobileMenu}
      >
       About
      </Link>
        </li>
        <li className="flex-center">
          <Link
            activeClass="active-link"
            to="portfolio"
            spy={false}
            smooth={true}
            offset={-70}
       
            onClick={props.closeMobileMenu}
          >
            Work
          </Link>
        </li>
        <li className="flex-center">
          <Link
            activeClass="active-link"
            to="contact"
            spy={false}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={props.closeMobileMenu}
          >
            Contact
          </Link>
        </li>
        <li className="flex-center">
          <a href="https://drive.google.com/file/d/1Pi2zPDf9EUAu313QxUQfr0TrHvyrcz74/view?usp=sharing">Resume</a>
        </li>
      </ul>
    </div>
  </div>
);

export default mobileNav;
