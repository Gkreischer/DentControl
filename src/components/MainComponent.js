import React, { Component } from "react";
import Login from "./LoginComponent";
import Home from "./HomeComponent";
import Clientes from "./ClientesComponent";
import NavBar from "./NavBarComponent";
import Estoque from './EstoqueComponent';
import { Redirect, Switch, Route } from "react-router-dom";
import { AuthRoute } from 'react-router-auth';
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

    if (this.state.isLogged) {
      return (
        <React.Fragment>
        <Redirect to="/home" />
          <NavBar />
          <Switch>
            <AuthRoute path="/home" component={Home} redirectTo="/login" authenticated={this.state.isLogged} /> 
            <AuthRoute path="/clientes" component={Clientes} redirectTo="/login" authenticated={this.state.isLogged} /> 
            <AuthRoute path="/estoque" component={Estoque} redirectTo="/login" authenticated={this.state.isLogged} /> 
          </Switch>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Redirect to="/login" />
          <Route
            path="/login"
            component={() => <Login isLogged={this.handleLogin} />}
          />
        </React.Fragment>
      );
    }
  }
}

export default Main;
