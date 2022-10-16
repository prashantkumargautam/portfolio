import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project_img1.png";
import projImg2 from "../assets/img/project_img2.png";
import projImg3 from "../assets/img/project_img3.png";
import projImg4 from "../assets/img/project_img4.png";
import projImg5 from "../assets/img/project_img5.png";
import projImg6 from "../assets/img/project_img6.png";
import projImg7 from "../assets/img/project_img7.png";
import projImg8 from "../assets/img/project_img8.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "JS ANIMATIONS",
      description: "HTML, CSS, JAVASCRIPT, BOOTSTRAP",
      imgUrl: projImg1,
    },
    {
      title: "COVID STATS",
      description: "HTML, CSS, JAVASCRIPT, BOOTSTRAP",
      imgUrl: projImg2,
    },
    {
      title: "FORM VALIDATION",
      description: "HTML, CSS, JAVASCRIPT, BOOTSTRAP",
      imgUrl: projImg3,
    },
    {
      title: "JS CALCULATOR",
      description: "HTML, CSS, JAVASCRIPT, BOOTSTRAP",
      imgUrl: projImg4,
    },
    {
      title: "JJS COUNTER",
      description: "HTML, CSS, JAVASCRIPT, BOOTSTRAP",
      imgUrl: projImg5,
    },
    {
      title: "JS QUIZ",
      description: "HTML, CSS, JAVASCRIPT, BOOTSTRAP",
      imgUrl: projImg6,
    },
    {
      title: "JS TO DO LIST",
      description: "HTML, CSS, JAVASCRIPT, BOOTSTRAP",
      imgUrl: projImg7,
    },
    {
      title: "JS NAVIGATION",
      description: "HTML, CSS, JAVASCRIPT, BOOTSTRAP",
      imgUrl: projImg8,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Hey guy's this is my projects which i've worked on i'll provide links of these projects and source code in description. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>....</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>....</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
