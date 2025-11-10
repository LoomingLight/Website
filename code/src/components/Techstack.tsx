import { Col, Row } from "react-bootstrap";
import { DiPython, DiJava, DiDatabase } from "react-icons/di";
import {
  SiAmazonwebservices,
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiCss3,
  SiHtml5,
  SiGooglecloud,
  SiR,
} from "react-icons/si";

export function Techstack() {
  return (
    <Row className="skillset-row">
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Amazon Web Services</span>
        <SiAmazonwebservices title="AWS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">CSS3</span>
        <SiCss3 title="CSS3" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Google Cloud</span>
        <SiGooglecloud title="Google Cloud" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">HTML5</span>
        <SiHtml5 title="HTML5" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Java</span>
        <DiJava title="Java" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">JavaScript</span>
        <SiJavascript title="JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Python</span>
        <DiPython title="Python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">R</span>
        <SiR title="R" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">React</span>
        <SiReact title="React" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">SQL</span>
        <DiDatabase title="SQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Tailwind CSS</span>
        <SiTailwindcss title="Tailwind CSS" />
      </Col>
    </Row>
  );
}