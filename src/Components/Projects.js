import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../Assets/img/ai-summarizar.jpg";
import projImg2 from "../Assets/img/calendar.jpg";
import projImg3 from "../Assets/img/physio.jpg";

import colorSharp2 from "../Assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      description:
        "Effortless Complex Content Simplification Through AI Summarization.",
      imgUrl: projImg1,
    },
    {
      description: "Effortless planning scheduling with Google Calendar clone",
      imgUrl: projImg2,
    },
    {
      description:
        "Fostering wellness through innovation and Empowering recovery",
      imgUrl: projImg3,
    },
    // {
    //   title: "XYZ",
    //   description: "XYZ",
    //   imgUrl: projImg1,
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    ></Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
