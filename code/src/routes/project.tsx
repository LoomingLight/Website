import { Particle } from "@/components/Particle";
import { ProjectCard } from "@/components/ProjectCard";
import { createFileRoute } from "@tanstack/react-router";
import { Col, Container, Row } from "react-bootstrap";
import httpServer from "@/assets/projects/httpserver.webp";
import personalfinance from "@/assets/projects/personalfinance.webp";
import scientificcalculator from "@/assets/projects/sakurascientificcalculator.webp";

export const Route = createFileRoute("/project")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Projects</strong>
        </h1>
        <p className="white-text">
          Explore my side projects, small apps and scripts that fuel my passion
          for code.
        </p>
        <Row className="project-row">
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={httpServer}
              title="HTTP Server"
              description="This is a simple HTTP server built from scratch in C. It handles basic HTTP requests and serves static files. This project was created as part of the Code Crafters series on YouTube."
              ghLink="https://github.com/LoomingLight/HTTP-Server-Code-Crafters"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={personalfinance}
              title="Personal Finance Tracker"
              description="A Python CLI tool to track expenses, set budgets, and visualize spending habits directly from your terminal."
              ghLink="https://github.com/LoomingLight/personal-finance-tracker"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scientificcalculator}
              title="Sakura Scientific Calculator"
              description="A retro-styled scientific calculator built with Python and Tkinter, featuring a high-contrast cherry blossom theme and full voice command support."
              ghLink="https://github.com/LoomingLight/sakura-scientific-calculator"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
