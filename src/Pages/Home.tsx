import AppContainer from "../components/AppContainer";
import AboutSection from "../components/Sections/AboutSection";
import Header from "./../components/Header";
import ExperienceSection from "../components/Sections/ExperienceSection";
import EducationSection from "../components/Sections/EducationSection";
import SkillsSection from "../components/Sections/SkillsSection";
import GithubSection from "../components/Sections/GithubSection";
import { Col, Row } from "reactstrap";

const Home = () => {
  return (
    <>
      <Header />
      <AppContainer>
        <div className="body">
          <Row>
            <Col md={6}>
              <AboutSection />
              <EducationSection />
            </Col>
            <Col md={6}>
              <SkillsSection />
              <ExperienceSection />
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col xs={12}></Col>
          </Row>
          <Row>
            <Col>
              <GithubSection />
            </Col>
          </Row>
        </div>
      </AppContainer>
    </>
  );
};

export default Home;
