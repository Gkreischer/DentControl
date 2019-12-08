import React, { Component } from 'react';
import Login from './LoginComponent';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }

        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    toggleNavbar() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <React.Fragment>
                <Login />
            </React.Fragment>
        );
    }
}

export default Main;