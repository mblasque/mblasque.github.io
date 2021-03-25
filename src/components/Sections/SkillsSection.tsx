import { Skills } from "./../../personalInfos";
import ProgressBar from "./../ProgressBar";
import { Col, Row } from "reactstrap";

import "./SkillsSection.scss";

const SkillsSection = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="box">
        <h2>Skills</h2>
        <Row>
          <Col>
            <table>
              <tbody>
                {Skills.map((item) => (
                  <tr>
                    <td>
                      <span>{item.desc}</span>
                    </td>
                    <td className="td-bar">
                      <ProgressBar value={item.level} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default SkillsSection;
