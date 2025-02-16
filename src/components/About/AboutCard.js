import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kedharnadh Kamatham </span>
            from <span className="purple"> Tirupati, India.</span>
            <br />
            <b className = "purple">Passionate Developer. </b>
            <br />
            I am a pre final year Computer Science student at SRM University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Horse Riding.
            </li>
            <li className="about-activity">
              <ImPointRight /> Tennis.
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Thrive to build things that make an impact!"{" "}
          </p>
          <footer className="blockquote-footer">Kedhar.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
