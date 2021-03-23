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
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import "./ExperienceSection.scss";

const ExperienceSection = ({}) => {
  return (
    <section className="experience-section">
      <h1>Atuação Profissional</h1>

      <Row>
        <Col>
          <Timeline align="alternate">
            <TimelineItem>
              <TimelineOppositeContent>9:30 am</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary"></TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div>
                  <Typography variant="h6" component="h1">
                    Eat
                  </Typography>
                  <Typography>Because you need strength</Typography>
                </div>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Col>
      </Row>

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
