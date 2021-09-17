import React from 'react';
import { Link } from "react-scroll";
// SCSS
import './navbar.scss';
// Assets
import LogoImg from '../../assets/navbar/logo192.png';
import MobileMenuIcon from '../../assets/navbar/mobile-menu.svg';

const desktopNav = (props) => (
  <nav className={`Navbar ${!props.userIsScrolled ? "extraLargeNavbar" : ""}`}>
    <div className="wrapper-nav flex-s-between">

      <div>
        <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
          <img src={LogoImg} alt="logo" className="logo" />
        </Link>
      </div>
      <div className="flex-grow-1"></div>
      <div className="mobile__menu" onClick={props.mobileMenuOpen}>
        <img src={MobileMenuIcon} alt="menu" />
      </div>

      <div className="desktop__menu font20 weight400">
        <ul className="flex-s-between">
          <li>
            <Link activeClass="active_nav" to="hero" spy={true} smooth={true} offset={-70} duration={500}>
              <span className="my-hover-1">About</span>
            </Link>
          </li>
          <li>
            <Link activeClass="active_nav" to="portfolio" spy={true} smooth={true} offset={-70} duration={500}>
              <span className="my-hover-1">Work</span>
            </Link>
          </li>
          <li>
            <Link activeClass="active_nav" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
              <span className="my-hover-1">Contact</span>
            </Link>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/15dsf3w0PskfZXSu9XJTacS4YIVVHzB0u/view?usp=sharing">
              <span className="my-hover-1">Resume</span>
            </a>

          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default desktopNav;