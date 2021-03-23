import React, { useState } from "react";
import { Container } from "reactstrap";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Button from "./../Button/Index.js";
import { HeaderWrapper } from "./styles";
import { Avatar } from "./../../images/avatar.png";

const Index = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <HeaderWrapper>
      <Container>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav
              navbar
              className="justify-content-end navbar-right__items"
              style={{ width: "100%" }}
            >
              <NavItem>
                <NavLink href="/">Why Era of We</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Solution</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Partners</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  <Button veriant="primary" size="lg">
                    Login
                  </Button>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <img src={Avatar} alt="avatar" className="img-fluid" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </HeaderWrapper>
  );
};

export default Index;
