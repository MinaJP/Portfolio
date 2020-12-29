import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
//Scss
import "./portfolio.scss";
//Assets
import Arrow from "../../assets/portfolio/arrow.svg";
import Preview1 from "../../assets/portfolio/project01/pinterest.png";
import Preview2 from "../../assets/portfolio/project02/tax.png";
import Preview3 from "../../assets/portfolio/project03/paw1.png";
import Preview4 from "../../assets/portfolio/project04/preview.png";
import Preview5 from "../../assets/portfolio/project05/preview.png";
import Preview6 from "../../assets/portfolio/project06/preview.png";
//Components
import Button from "../ui-components/button/button";
import Title from "../ui-components/title/title";
import ProjectBox from "../ui-components/projectBox/projectBox";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // PORTFOLIO PROJECTS
      projects: [
        {
          id: "1",
          preview: Preview1,
          title: "Pinterest: Wall of Fame",
          tag: "role: research-digital product design concepts",
          des:"A semester long case study on Pinterest's trying out pin features",
          link:"https://medium.com/@jp889/pinterest-case-study-my-wall-of-fame-be5869401299",
        },
        {
          id: "2",
          preview: Preview2,
          title: "Tax Calculator",
          tag: "role: design, implement user interface and sqlite database",
          des:"Chrome Extension for displaying US post-tax prices when hover over products prices on relevant webpages",
          link:"https://github.com/DoanhTran/tax_calculator"
        },
        {
          id: "3",
          preview: Preview3,
          title: "Pawmodoro Timer",
          tag: "role: design, create graphics, implement UI and animations",
          des:"A timer based on Pomodoro technique with animation which visually reflect countdown timer",
          link:"https://github.com/linda-huang/pomodoro_timer"
        },
        
      ],
      // PORTFOLIO GALLERY WILL LOAD THIS AFTER FUNCTION "filterGallery" FINISH FILTERING
      filterResult: null,
      pickedFilter: "DPD",
      filterMenuActive: false,
      pickedFilterDropdown: "NEWEST"
    };
  }

  // FIRST LOAD
  // componentDidMount() {
  //   this.filterGallery("DPD");
  // }

  //FILTER PORTFOLIO FUNCTION
  // filterGallery = (target) => {
  //   let projectsArr = [...this.state.projects];
  //   let result;

  //   if (target !== "all") {
  //     result = projectsArr.filter((project) => project.tag === target);
  //   } else {
  //     result = projectsArr;
  //   }

  //   this.setState({ filterResult: result, pickedFilter: target, pickedFilterDropdown: "NEWEST" });
  // };

  // FILTER DROP DOWN HOVER MENU FUNCTION
  // filterMenuHover = (event) => {
  //   if(event) {
  //     this.setState({ filterMenuActive: true });
  //   }else {
  //     this.setState({ filterMenuActive: false });
  //   }
  // }

  // FILTER DROP DOWN HANDLER
  filterDropDownHandler = (filter) => {
    this.setState({ pickedFilterDropdown: filter, filterMenuActive: false });

    let projectsArr = [...this.state.filterResult];
    let result;

    if (filter === "NEWEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1));
    }else if (filter === "OLDEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
    }

    this.setState({ filterResult: result});
  }

  // RENDER
  render() {
    // PORTFOLIO GALLERY RENDER
   let projectsRender = null;
    // if (this.state.filterResult) {
    //   projectsRender = this.state.filterResult.map((project) => (
    //     <ProjectBox preview={project.preview} key={project.id} title={project.title} tag={project.tag} />
    //   ));
    // }
    if (this.state.projects){
      projectsRender = this.state.projects.map((project) => (
        <ProjectBox preview={project.preview} key={project.id} title={project.title} tag={project.tag} des={project.des} link={project.link} />
       ));

    }
    // PORTFOLIO GALLERY BREAKPOINTS
    // const portfolioBreakpoints = {
    //   default: 3,
    //   1100: 3,
    //   700: 2,
    //   500: 1,
    // };
    // PORTFOLIO FILTER DROPDOWN MENY RENDER
    // let filterDroppDown = null;
    // if(this.state.filterMenuActive) {
    //   filterDroppDown = (
    //     <div className="portfolio__filter-menu shadow">
    //       <p className="font12" onClick={() => this.filterDropDownHandler("NEWEST")}>
    //         NEWEST
    //       </p>
    //       <p className="font12" onClick={() => this.filterDropDownHandler("OLDEST")}>
    //         OLDEST
    //       </p>
    //     </div>
    //   );
    // }

    return (
      <div id="portfolio">
        <div className="wrapper">
          <h1>Projects</h1> 
          {/* <Row>
            <Col xs={12} sm={12} md={8} lg={9}>
              <div className="portfolio__nav">
                <ul>
                  <li
                    className={this.state.pickedFilter === "DPD" ? "portfolio__nav-active font12" : "font12"}
                    onClick={() => this.filterGallery("DPD")}
                  >
                    DIGITAL PRODUCT DESIGN
                  </li>
                  <li
                    className={this.state.pickedFilter === "illustrations" ? "portfolio__nav-active font12" : "font12"}
                    onClick={() => this.filterGallery("illustrations")}
                  >
                    ILLUSTRATIONS
                  </li>
                  <li className={this.state.pickedFilter === "pics" ? "portfolio__nav-active font12" : "font12"} onClick={() => this.filterGallery("pics")}>
                    PHOTOGRAPHY
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={3}>
              <div className="portfolio__filter" onMouseEnter={() => this.filterMenuHover(true)} onMouseLeave={() => this.filterMenuHover(false)}>
                <p className="font12">{this.state.pickedFilterDropdown} FIRST</p>
                <img src={Arrow} alt="arrow" />
                {filterDroppDown}
              </div>
            </Col>
          </Row> */}
          <div className="wrapper proj">
          {projectsRender}
          </div>
            
       
          
        </div>
      </div>
    );
  }
}

export default Portfolio;
