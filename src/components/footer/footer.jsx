import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { Link } from "react-scroll";
import "./footer.scss";

import Logo from '../../assets/footer/logo.svg';
import Arrow from '../../assets/footer/arrow.svg';

const partnerBox = () => (
  
    <div className="wrapper right">
     <Link activeClass="active_nav" to="hero">
     <span className="link font20">go up ☝️</span></Link>
    </div>
  
);
export default partnerBox;
