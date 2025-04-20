import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import project images
import hospital from "../../Assets/Projects/Hospital.png";
import inventory from "../../Assets/Projects/Inventory.png";
import pdfAuto from "../../Assets/Projects/PDFAuto.png";
import skinCancer from "../../Assets/Projects/SkinCancer.png";
import NLSQL from "../../Assets/Projects/NLSQL.png";

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

{/* Formula 1 Race Winner Prediction Using Machine Learning */}
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={skinCancer}
              isBlog={false}
              title="Formula 1 Race Winner Prediction Using Machine Learning "
              description="Predicted 2025 Japanese GP outcome using FastF1 API data and Gradient Boosting model, achieving 0.156s MAE. Predicted winner and top positions with 92% accuracy, demonstrating real-world application of ML in sports analytics."
              ghLink="https://github.com/Kedhar7/F1-Race-Winner-Prediction-JapanGP"
            />
          </Col>

{/* Natural Language to SQL Queries */}
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={NLSQL}
              isBlog={false}
              title="Natural Language to SQL Queries"
              description="Built a Natural Language to SQL Query system using Azure OpenAI, processing unlimited queries daily with AI-driven validation, security enforcement, and 7+ advanced data visualizations, streamlining database interactions. "
              ghLink="https://github.com/Kedhar7/Natural-Language-To-SQL-Query"
            />
          </Col>



          {/* Skin Cancer Detection */}
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={skinCancer}
              isBlog={false}
              title="Skin Cancer Detection and Classification"
              description="Developed a FastAI-based ResNet Models Integrated with Transfer Learning to classify skin lesions using the HAM10000 dataset. This achieved over 97% validation accuracy. Tested the model using 10,000+ images."
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
