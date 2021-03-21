import { Col, Row } from "reactstrap";
import me from "./../../resources/me.png";
import psmi from "./../../resources/psmi.png";
import psmii from "./../../resources/psmii.png";
import sps from "./../../resources/sps.png";

import "./AboutSection.scss";

const AboutSection = ({}) => {
  const mediaList = [
    {
      key: "linkedin",
      link: "https://www.linkedin.com/in/mauricioblasque/",
      icon: "fa-linkedin-square",
    },
    {
      key: "gihub",
      link: "https://github.com/mblasque",
      icon: "fa-github",
    },
    {
      key: "facebook",
      link: "https://www.facebook.com/mauricio.blasque",
      icon: "fa-facebook-square",
    },
    {
      key: "instagram",
      link: "https://www.instagram.com/mauricioblasque/",
      icon: "fa-instagram",
    },
  ];

  return (
    <section className="about-section">
      <Row>
        <Col md={6}>
          <img src={me} />
          <h1>Maurício Blasque</h1>
          <h3>Software Engineer</h3>

          {mediaList.map((media) => (
            <a href={`${media.link}`} target="_blank">
              <i className={`fa ${media.icon}`}></i>
            </a>
          ))}
        </Col>
        <Col md={6}>
          <div className="about-me">
            <h1>About Me</h1>
            <span>
              Nine years of experience in analysis, architecture and development
              of systems. Solid knowledge in writing code in C# and Delphi
              languages as well as advanced queries for any SQL database. Seven
              years of experience with Scrum Framework, being two of them as
              Scrum Master. Proactive and self-starter professional, able to
              work with new technologies. Certified Professional Scrum Master
              (PSM I and II) and Scaled Professional Scrum (SPS) by Scrum.org.
            </span>
            <div className="badges">
              <img src={psmi} />
              <img src={psmii} />
              <img src={sps} />
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default AboutSection;
