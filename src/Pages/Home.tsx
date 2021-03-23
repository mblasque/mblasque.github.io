import React, { FC } from "react";
import AppContainer from "../components/AppContainer";
import AboutSection from "../components/Sections/AboutSection";
import { AppSlice } from "../slices/appSlice";
import { RootState } from "../store";
import Header from "./../components/Header";
import { connect } from "react-redux";
import ExperienceSection from "../components/Sections/ExperienceSection";
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
          <AboutSection />
        </Row>
        <Row>
          <Col xl={6}>
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
