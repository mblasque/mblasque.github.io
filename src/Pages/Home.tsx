import { FC } from "react";
import AppContainer from "../components/AppContainer";
import AboutSection from "../components/Sections/AboutSection";
import { AppSlice } from "../slices/appSlice";
import { RootState } from "../store";
import Header from "./../components/Header";
import { connect } from "react-redux";

type StateProps = {
  app: AppSlice;
};

const Home: FC<StateProps> = ({ app }) => {
  return (
    <>
      <Header app={app} />
      <AppContainer>
        <AboutSection />
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
