import { Col, Row } from "reactstrap";
import { Experience } from "./../../personalInfos";
import Label from "./../Label";

import "./ExperienceSection.scss";

const ExperienceSection = ({}) => {
  return (
    <section className="experience-section">
      <h1>Atuação Profissional</h1>

      {Experience.map((item) => (
        <Row>
          <Col>
            <div className="company-card">
              <i className={`fa fa-building`} />
              <span>{item.company}</span>
              <br />
              <i className={`fa fa-clock-o`} />
              <Label labelKey={item.interval} />
              <br />
              <i className={`fa fa-address-card-o`} />
              <Label labelKey={item.position} />
              <br />
            </div>
          </Col>
        </Row>
      ))}
    </section>
  );
};

export default ExperienceSection;
