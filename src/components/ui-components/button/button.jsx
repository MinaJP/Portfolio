import React from "react";
import { Link } from "react-scroll";
// SCSS
import "./button.scss";

const hero = (props) => (
  <div className="button font30">
    <Link
      className="button-link"
      to={props.target}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      {props.label}
    </Link>
  </div>
);

export default hero;
