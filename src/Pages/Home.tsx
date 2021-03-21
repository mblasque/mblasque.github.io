import AppContainer from "../components/AppContainer";
import AboutSection from "../components/Sections/AboutSection";
import Header from "./../components/Header";

const Home = ({}) => {
  return (
    <>
      <Header />
      <AppContainer>
        <AboutSection />
      </AppContainer>
    </>
  );
};

export default Home;
