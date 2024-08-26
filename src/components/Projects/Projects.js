import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Gabit App"
              description="Works on various features in the app using React and React native "
              demoLink="https://www.gabit.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="The-Biscotti-Cafe-Order-System"
              description="Biscotti Cafe Order System: Streamlined, user-friendly interface for efficient table orders, adding items, viewing summaries, and managing multiple orders seamlessly build with Python."
              ghLink="https://github.com/kanakahuja/The-Biscotti-Cafe-Order-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Travel Website"
              description="Created a website with a database connection for IIT Kharagpur where students can fill in information for their US trip using HTML, CSS, JavaScript, and PHP."
              ghLink="https://github.com/kanakahuja/PHP-PROJECT"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title=" Avalanches Early Detection & Mitigation"
              description=" Developed a real-time avalanche risk assessment and prediction system to support tourists and trekkers,
 providing emergency help and enhancing safety measures using Machine Learning, Artificial Intelligence."
              ghLink="https://github.com/kanakahuja/Avalanches-Early-Detection-Mitigation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Auto Crash Alert"
              description=" Developed a hardware-based system to detect car accidents, instantly dispatching ambulance services to
 precise locations, revolutionizing emergency response."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
