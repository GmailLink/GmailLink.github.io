import React, { Fragment } from "react";
import { Jumbotron, Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import MailComponent from "./components";
import logo from "./images/gmailLogo.ico";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { canSubmit: false };
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  render() {
    return (
      <Fragment>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="https://gmaillink.github.io/">
              <img
                className="homepageLogo"
                src={logo}
                alt=""
                height="30px"
                width="30px"
              />
              Gmail Sharable Link Creator
            </NavbarBrand>
          </div>
        </Navbar>

        <div className="emailLinkGen">
          <Jumbotron style={{ marginBottom: 0, height: "95vh" }}>
            <MailComponent />
          </Jumbotron>
        </div>
      </Fragment>
    );
  }
}
