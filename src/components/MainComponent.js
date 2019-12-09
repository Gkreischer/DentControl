import React, { Component } from "react";
import Login from "./LoginComponent";
import Home from "./HomeComponent";
import { Redirect, Switch, Route } from "react-router-dom";
import ProtectedRoute from "react-protected-route";
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isLogged: false
    };

    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleLogin(isLogged) {
    if (isLogged) {
      this.setState({ isLogged: isLogged });
      console.log(this.state.isLogged);
    } else {
      return <Redirect to="/login" />;
    }
  }

  render() {
    if (this.state.isLogged) {
      return (
        <React.Fragment>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Login isLogged={(isLogged) => this.handleLogin(isLogged)} />
        </React.Fragment>
      );
    }
  }
}

export default Main;
