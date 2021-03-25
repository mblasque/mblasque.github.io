import { Col, Row } from "reactstrap";
import { Education } from "./../../personalInfos";
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

import "./EducationSection.scss";

const EducationSection = () => {
  return (
    <section className="education-section">
      <div className="box">
        <h2>Formação Acadêmica</h2>
        <Row>
          <Col>
            <Timeline>
              {Education.map((item, index) => (
                <TimelineItem key={item.key}>
                  <TimelineOppositeContent>
                    {item.interval}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary"></TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div>
                      <Typography>
                        <Label labelKey={item.school} />
                      </Typography>
                      <Typography>
                        <Label labelKey={item.course} />
                      </Typography>
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

export default EducationSection;
