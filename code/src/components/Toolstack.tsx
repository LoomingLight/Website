import { Col, Row } from "react-bootstrap";
import { DiVisualstudio, DiNetbeans } from "react-icons/di";
import { SiGithub, SiSlack, SiCanva } from "react-icons/si";

export function Toolstack() {
  return (
    <Row className="skillset-row">
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Canva</span>
        <SiCanva title="Canva" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">GitHub</span>
        <SiGithub title="GitHub" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">NetBeans</span>
        <DiNetbeans title="NetBeans" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Slack</span>
        <SiSlack title="Slack" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tech-label">Visual Studio</span>
        <DiVisualstudio title="Visual Studio" />
      </Col>
    </Row>
  );
}
