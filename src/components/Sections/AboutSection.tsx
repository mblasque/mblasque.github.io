import { Col, Row } from "reactstrap";
import me from "./../../resources/me.png";
import psmi from "./../../resources/psmi.png";
import psmii from "./../../resources/psmii.png";
import sps from "./../../resources/sps.png";
import Label from "./../Label";
import { SocialMedia } from "./../../personalInfos";

import "./AboutSection.scss";

const AboutSection = ({}) => {
  return (
    <section className="about-section" data-aos="fade-right">
      <h1>
        <Label labelKey="aboutMe" />
      </h1>
      <Row>
        <Col md={6} data-aos="fade-right">
          <img src={me} />
          <h1>
            <Label labelKey="name" />
          </h1>
          <h3>
            <Label labelKey="softwareEnginner" />
          </h3>

          {SocialMedia.map((media) => (
            <a key={media.key} href={`${media.link}`} target="_blank">
              <i className={`fa ${media.icon}`}></i>
            </a>
          ))}
        </Col>
        <Col md={6}>
          <div className="about-me">
            <Label labelKey="aboutText" />
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
