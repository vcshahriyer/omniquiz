import React, { Component } from "react";
import "./css/dropDownMenu.css";

class DropDownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true
    };
  }
  handleToggle = () => {
    const currentState = this.state.toggle;
    this.setState({ toggle: !currentState });
  };
  render() {
    return (
      <div className={this.state.toggle ? "vc-dropdown" : "vc-dropdown show"}>
        <span className="dropdown-toggle nav-link" onClick={this.handleToggle}>
          Dropdown
        </span>
        <div className="vc-dropdown-menu">
          <a className="dropdown-item" href="/">
            Login
          </a>
          <a className="dropdown-item" href="/">
            Logout
          </a>
          <a className="dropdown-item" href="/">
            Registration
          </a>
        </div>
      </div>
    );
  }
}

export default DropDownMenu;
