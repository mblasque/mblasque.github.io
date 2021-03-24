import { Col, Row } from "reactstrap";
import me from "./../../resources/me.png";
import psmi from "./../../resources/psmi.png";
import psmii from "./../../resources/psmii.png";
import sps from "./../../resources/sps.png";
import Label from "./../Label";
import { SocialMedia } from "./../../personalInfos";

import "./AboutSection.scss";

const AboutSection = () => {
  return (
    <section className="about-section">
      <Row>
        <Col>
          <div className="box">
            <img alt="me-img" src={me} />
            <h1>
              <Label labelKey="name" />
            </h1>
            <h3>
              <Label labelKey="softwareEngineer" />
            </h3>
            {SocialMedia.map((media) => (
              <a
                key={media.key}
                href={`${media.link}`}
                target="_blank"
                rel="noreferrer"
              >
                <i className={`fa ${media.icon}`}></i>
              </a>
            ))}
            <div className="about-me">
              <Label labelKey="aboutText" />
              <div className="badges">
                <img alt="psmi-img" src={psmi} />
                <img alt="psmii-img" src={psmii} />
                <img alt="sps-img" src={sps} />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default AboutSection;
