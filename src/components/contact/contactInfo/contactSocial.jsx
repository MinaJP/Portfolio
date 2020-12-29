import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactSocial.scss";


import In from "../../../assets/contact/in.png";
import Git from "../../../assets/contact/git.png";
import mail from "../../../assets/contact/mail.png";


const contactSocial = () => (

  // <Row>
  //   <Col xs={12}>
  //     <Row center="xs">
  <div className="flex_box">
        <a href="mailto: jp889@cornell.edu"xs={12} lg={1} className="contact__social">
          <img className="soc" src={mail} alt="mail" />
        </a>
        <a href="https://github.com/MinaJP" xs={12} lg={1} className="contact__social">
          <img className="soc" src={Git} alt="git" />
        </a>
        <a xs={12} href="https://linkedin.com/in/mina-jitrada-pra"className="soc" lg={1} className="contact__social">
          <img className="soc" src={In} alt="LinkedIn" />
        </a>
        </div>
  //     </Row>
  //   </Col>
  // </Row>

 );

export default contactSocial;
