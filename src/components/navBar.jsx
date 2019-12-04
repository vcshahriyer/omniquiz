import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../logo.png";
import DropDownMenu from "./common/dropDownMenu";

class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="" />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="ml-auto mr-3">
            <NavLink
              className="nav-link"
              to="/"
              isActive={match => {
                if (!match) {
                  return false;
                }
              }}
            >
              Home
            </NavLink>
            <NavLink className="nav-link" to="/quiz/random">
              Random Quiz
            </NavLink>
            <DropDownMenu />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavMenu;
