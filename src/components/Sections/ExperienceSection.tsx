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
                    {!(index === Experience.length - 1) && (
                      <TimelineConnector />
                    )}
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className="timeline-content">
                      {item.company}
                      <br />
                      <Label labelKey={item.position} />
                      <br />
                      {item.site}
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
