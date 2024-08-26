import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kanak Ahuja </span>
            from <span className="purple"> Gurugram -Haryana, India.</span>
            <br />
            I am completed my internship as a frontend developer at Gabit.
            <br />
            I have doing Btech in Artificial Intelligence and Machine Learning
            at VIPS Delhi.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Teaching
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Making content related to coding on my ig
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Kanak Ahuja</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
