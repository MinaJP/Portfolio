import React from "react";
// Scss
import "./projectBox.scss";

const projectBox = (props) => (
  <a className="portfolio__box" href={props.link}>
    <img className="proj_im" src={props.preview} alt="project" />
    
      
        <div className="font20 text-box">{props.title}</div>
        <div className="font14 role text-box">{props.tag}</div>
        <div className="font16 text-box">{props.des}</div>
     
    
  </a>
);

export default projectBox;
