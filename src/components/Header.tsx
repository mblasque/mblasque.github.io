import labels from "../utils/labels";
import LanguageSelector from "./LanguageSelector";
import AppContainer from "./AppContainer";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { useState, FC } from "react";
import { AppSlice } from "../slices/appSlice";

import "./Header.scss";
import { RootState } from "../store";
import { connect } from "react-redux";

type HeaderProps = {
  app: AppSlice;
};

const Header: FC<HeaderProps> = ({ app }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const menuItems = [
    { key: "about", value: labels("about", app.language) },
    { key: "experience", value: labels("experience", app.language) },
    { key: "skills", value: labels("skills", app.language) },
    { key: "education", value: labels("education", app.language) },
  ];

  const goTo = (section: string) => {
    // const element = document.getElementById(section);

    // window.scrollTo(0, (element?.scrollHeight ?? 0) - 80);

    document.getElementById(section)?.scrollIntoView();

    toggle();
  };

  return (
    <section className="header-section">
      <Navbar color="light" light expand="md">
        <AppContainer>
          <NavbarToggler onClick={toggle} />
          <LanguageSelector app={app} className="d-md-none" />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {menuItems.map((item) => (
                <NavItem key={item.key}>
                  <NavLink onClick={() => goTo(item.key)}>{item.value}</NavLink>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
          <LanguageSelector app={app} className="d-none d-md-block" />
        </AppContainer>
      </Navbar>
    </section>
  );
};

const mapStateToProps = (state: RootState): HeaderProps => {
  return {
    app: state.app,
  };
};

export default connect(mapStateToProps)(Header);
