import Card from "react-bootstrap/Card";

export function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p>
        Hello! I'm <span className="purple">Jhon Telthony Arnado</span>, an
        <span className="purple"> Account Specialist</span> and results-oriented
        professional based in the <span className="purple">Philippines</span>.
        <br />
        <br />
        My BS is in <span className="purple"> Economics</span>, and I have over
        <span className="purple"> 4 years</span> of experience in multiple industries,
        building web applications and optimizing business operations.
        <br />
        <br />
        I have a diverse background spanning Administration, Project Management, and
        Data Analytics. My core competencies include managing
        <span className="purple"> large-scale projects</span>, ensuring regulatory
        compliance, and utilizing tools such as{" "}
      <span className="purple">SQL, Python, Power BI, and AWS</span> to generate
      actionable insights.
      <br />
      <br />
      I also have a strong foundation in <span className="purple"> Content Development</span>{" "}
      and technical research, contributing to knowledge-sharing in business strategy
      and sustainability.
      <br />
      <br />
      I am a go-getter, committed to continuous learning in areas like
      <span className="purple"> Artificial Intelligence</span> and Ethical Compliance.
      My objective is to bridge the gap between data-driven innovation and{" "}
      <span className="purple">responsible governance</span>.
      </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
