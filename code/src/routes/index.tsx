import { Particle } from "@/components/Particle";
import { createFileRoute } from "@tanstack/react-router";
import { Col, Container, Row } from "react-bootstrap";
import homeLogo from "@/assets/home-main.webp";
import { Type } from "@/components/Type";
import myImg from "@/assets/avatar.webp";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section>
      <HomeHero />
      <HomeAbout />
    </section>
  );
}

function HomeHero() {
  return (
    <Container fluid className="home-section" id="home">
      <Particle />
      <Container className="home-content">
        <Row>
          <Col md={7} className="home-header">
            <h1 className="heading">
              Good day!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏿
              </span>
            </h1>

            <h1 className="heading-name">
              I'M
              <strong className="main-name"> JHON TELTHONY ARNADO</strong>
            </h1>

            <div className="type-wrapper">
              <Type
                strings={[
                  "Account Specialist",
                  "Project Administrator",
                  "AI Enthusiast",
                  "Volunteer",
                  "Aspiring Full-Stack Developer",
                ]}
              />
            </div>
          </Col>

          <Col md={5} className="home-col">
            <img
              src={homeLogo}
              alt="home pic"
              className="img-fluid home-image"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

function HomeAbout() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 className="home-about-heading">
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              With over <b className="purple">4 years of hands-on experience</b>{" "}
              in data analytics, I’m passionate about{" "}
              <b className="purple">tackling complex challenges</b> and crafting{" "}
              <i>efficient, scalable solutions</i>.
              <br />
              <br />I specialize in <b className="purple">Java</b>,{" "}
              <b className="purple">SQL</b>, <b className="purple">C#</b>, and{" "}
              <b className="purple">Python</b>, combining deep backend knowledge
              with modern front-end expertise.
              <br />
              <br />I love designing{" "}
              <i>
                <b className="purple">cloud-native web applications</b>
              </i>{" "}
              and exploring how <b className="purple">AI-driven technologies</b>{" "}
              can enhance user experiences and automate workflows.
              <br />
              <br />
              My analytical toolkit is centered around{" "}
              <b className="purple">Python</b> and <b className="purple">R</b>{" "}
              for statistical modeling, and <b className="purple">SQL</b> for
              complex data extraction. I'm also adept at leveraging cloud
              services from <b className="purple">AWS</b> and{" "}
              <b className="purple">Google Cloud</b> to build and scale
              data-driven applications.
              <br />
              <br />
              I’m passionate about deploying apps on{" "}
              <b className="purple">serverless architectures</b> to ensure
              speed, scalability, and seamless user experiences.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid avatar-image"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <SocialLinks />
      </Container>
    </Container>
  );
}

function SocialLinks() {
  const socialLinksData = [
    {
      href: "https://github.com/loominglight",
      icon: <AiFillGithub />,
      title: "GitHub",
      label: "Visit my GitHub profile",
    },
    {
      href: "https://www.linkedin.com/in/telthony/",
      icon: <FaLinkedinIn />,
      title: "LinkedIn",
      label: "Connect with me on LinkedIn",
    },
    {
      href: "mailto:jhontelthonyarnado@gmail.com",
      icon: <AiOutlineMail />,
      title: "Email",
      label: "Send me an email",
    },
  ];

  return (
    <Row>
      <Col md={12} className="home-about-social">
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className="purple">connect </span>with me
        </p>
        <ul className="home-about-social-links">
          {socialLinksData.map((link, index) => (
            <li key={index} className="social-icons">
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                title={link.title}
                aria-label={link.label}
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
}