import { Col, Row } from "reactstrap";
import { Experience } from "./../../personalInfos";
import Label from "./../Label";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@material-ui/lab";
import Typography from "@material-ui/core/Typography";

import "./ExperienceSection.scss";

const ExperienceSection = () => {
  return (
    <section className="experience-section">
      <div className="box">
        <h2>Experiência Profissional</h2>
        <Row>
          <Col>
            <Timeline>
              {Experience.map((item, index) => (
                <TimelineItem key={item.key}>
                  <TimelineOppositeContent>
                    <Label labelKey={item.interval} />
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary"></TimelineDot>

                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className="timeline-content">
                      <i className={`fa fa-building`} />
                      {item.company}
                      <br />
                      <i className={`fa fa-desktop`} />
                      <Label labelKey={item.position} />
                      <br />
                      <i className={`fa fa-link`} />
                      <a href={`${item.site}`} target="_blank" rel="noreferrer">
                        {item.site}
                      </a>
                    </div>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ExperienceSection;
