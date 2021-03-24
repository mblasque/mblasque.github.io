import { FC } from "react";
import { Container } from "reactstrap";

const AppContainer: FC = ({ children }) => {
  return <Container fluid="lg">{children}</Container>;
};

export default AppContainer;
