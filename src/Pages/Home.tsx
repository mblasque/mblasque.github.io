import AppContainer from "../components/AppContainer";
import AboutSection from "../components/Sections/AboutSection";
import Header from "./../components/Header";
import ExperienceSection from "../components/Sections/ExperienceSection";
import EducationSection from "../components/Sections/EducationSection";
import SkillsSection from "../components/Sections/SkillsSection";
import { Col, Row } from "reactstrap";

const Home = () => {
  return (
    <>
      <Header />
      <AppContainer>
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
      </AppContainer>
    </>
  );
};

export default Home;
