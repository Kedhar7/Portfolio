import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import project images
import leaf from "../../Assets/Projects/leaf.png";
import hospital from "../../Assets/Projects/Hospital.png";
import inventory from "../../Assets/Projects/Inventory.png";
import pdfAuto from "../../Assets/Projects/PDFAuto.png";
import skinCancer from "../../Assets/Projects/SkinCancer.png";
import suicide from "../../Assets/Projects/suicide.png"; // Added AI for Social Good image

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Skin Cancer Detection */}
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={skinCancer}
              isBlog={false}
              title="Skin Cancer Detection and Classification"
              description="Developed a CNN-based model to classify skin lesions using the HAM10000 dataset. This achieved over 62% validation accuracy. Tested the model using 10,000+ images."
              ghLink="https://github.com/Kedhar7/Skin-Lesion-Classification"
            />
          </Col>

          {/* PDF Auto Converter */}
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={pdfAuto}
              isBlog={false}
              title="Automated PDF Data Extraction Tool"
              description="Built a Python & OpenCV-based tool to extract data from PDFs into Excel with 72% OCR accuracy, processing 500+ PDFs, reducing manual data entry time by 87%."
              ghLink="https://github.com/Kedhar7/PDF-Data-Extraction"
            />
          </Col>


          {/* Inventory Management System */}
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={inventory}
              isBlog={false}
              title="Inventory Automation System"
              description="Automated inventory management processes, reducing update time by 73% and improving client interaction efficiency during peak periods."
              ghLink="https://github.com/Kedhar7/Inventory-Management-System"
            />
          </Col>

          {/* Hospital Management System */}
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={hospital}
              isBlog={false}
              title="Hospital Management System"
              description="Developed a C++ hospital management system to streamline appointment scheduling for 1,000+ patients, improving record maintenance and user experience."
              ghLink="https://github.com/Kedhar7/Hospital-Management-System"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;