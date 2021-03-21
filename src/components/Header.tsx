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
import { useState } from "react";

import "./Header.scss";

const Header = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const menuItems = [
    { key: "about", value: labels("about") },
    { key: "experience", value: labels("experience") },
    { key: "education", value: labels("education") },
  ];

  return (
    <div>
      <Navbar color="light" light expand="md">
        <AppContainer>
          <NavbarToggler onClick={toggle} />
          <LanguageSelector className="d-md-none" />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {menuItems.map((item) => (
                <NavItem>
                  <NavLink href={`#/${item.key}`}>{item.value}</NavLink>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
          <LanguageSelector className="d-none d-md-block" />
        </AppContainer>
      </Navbar>
    </div>
  );
};

export default Header;
