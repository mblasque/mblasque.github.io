import React, { FC } from "react";
import AppContainer from "../components/AppContainer";
import AboutSection from "../components/Sections/AboutSection";
import { AppSlice } from "../slices/appSlice";
import { RootState } from "../store";
import Header from "./../components/Header";
import { connect } from "react-redux";
import ExperienceSection from "../components/Sections/ExperienceSection";
import EducationSection from "../components/Sections/EducationSection";
import SkillsSection from "../components/Sections/SkillsSection";
import { Col, Row } from "reactstrap";

type StateProps = {
  app: AppSlice;
};

const Home: FC<StateProps> = ({ app }) => {
  return (
    <>
      <Header app={app} />
      <AppContainer>
        <Row>
          <Col md={6}>
            <AboutSection />
          </Col>
          <Col md={6}>
            <SkillsSection />
          </Col>
        </Row>
        <Row>
          <Col>
            <EducationSection />
          </Col>
          <Col xs={12}>
            <ExperienceSection />
          </Col>
        </Row>
      </AppContainer>
    </>
  );
};

const mapStateToProps = (state: RootState): StateProps => {
  return {
    app: state.app,
  };
};

export default connect(mapStateToProps)(Home);
