import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Assets
import HeroImage from '../../assets/hero/IMG_0670.PNG';
//Components
import Button from '../ui-components/button/button';
import ContactSocial from '../contact/contactInfo/contactSocial.jsx'
import { Link } from "react-scroll";

const hero = () => (
  <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <Col  d={12} lg={6}>
        
            <img className= "he_im" src={HeroImage} alt="hero" />
         
          <div  className="hero-info">
          
          <h1 className="h_hero">
            Hi, I'm <span className="sketch-highlight">Mina</span>        
            </h1>
            <div className="padding10">
            <p className="p_hero">
             I am passionate about design and intersection between human, society, and technology, currently exploring computing, design, and technology @Cornell
            
            </p>
            <ContactSocial/>
            
            </div>
           
            
            {/* <Button label="Connect with me" target={"contact"} /> */}
          </div>
         
        </Col>
        <Col md={0} lg={1}></Col>
        <Col md={12} lg={5}>
          <div className="hero-info">
            <dl className="wrapper">
            <dt className="topic"><span className="sketch-highlight"></span>Currently Working With</dt>
            <dd><span className="underline">Disrupt the System</span> as part of design-publicity and webdev teams to host ideathon with the focus on social justice.</dd>
            <dd><span className="underline">Project Campus</span> to launch MVP aiming to promote valuable conversation between prospective students, and current students and alumni volunteers.</dd>
            <dt className="topic"><span className="sketch-highlight"></span>Recent Explorations</dt>
            <dd >Marketing</dd>
            <dd>Computer Graphics</dd>
            <dd>Web Design & Development</dd>
            <dd>Analysis of Algorithms</dd>
            <Link activeClass="active_nav" to="portfolio">
            <dt className="link"><span className="sketch-highlight"></span>Past Works👇</dt>
            </Link>
            
            
            </dl>



          </div>
         
        </Col>
      </Row>
    </div>
  </div>
);

export default hero;
