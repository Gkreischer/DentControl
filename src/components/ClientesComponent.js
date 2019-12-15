import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
class Clientes extends Component {
    constructor(props){
        super(props);

        this.state = { };
    }

    render(){
        return(
            <React.Fragment>
                <Jumbotron>
                    <h1>Clientes</h1>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Clientes;