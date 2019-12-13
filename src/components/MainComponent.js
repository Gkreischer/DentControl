import React, { Component } from "react";
import Login from "./LoginComponent";
import Home from "./HomeComponent";
import { Redirect, Switch, Route } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      // Set to true for development
      isLogged: true
      
    };

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleNavbar() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleLogin(isLogged) {
    if (isLogged) {
      this.setState({ isLogged: true });
    } else {
      console.log(`Nao esta logado`);
    }
  }

  render() {

    const HomePage = () => {
      return (
        <Home />
      );
    }

    if (this.state.isLogged) {
      return (
        <React.Fragment>
          <Redirect to="/home" />
          <Switch>
            <Route path="/home" component={HomePage} />
          </Switch>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Redirect to="/login" />
          <Switch>
            <Route path="/login" component={() => <Login isLogged={this.handleLogin} />} />
          </Switch>
        </React.Fragment>
      );
    }

  }
}

export default Main;
