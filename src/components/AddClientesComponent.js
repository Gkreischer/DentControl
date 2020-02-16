import React, { Component } from 'react';

import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Redirect, withRouter } from 'react-router-dom';

class AddCliente extends Component {
    
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        const { history } = this.props;
        return (
            <div className="mt-md-5">
                <Container>
                    <Row>
                        <Col md="4">
                            <Button onClick={() => {history.goBack()}} className="mb-md-3" color="info"><span className="fa fa-arrow-left"></span></Button>
                            <h2>Cadastro de paciente</h2>
                            <Form>
                                <FormGroup>
                                    <Label for="clientName">Nome</Label>
                                    <Input type="text" name="name" id="clientName" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="cpf">CPF</Label>
                                    <Input type="number" name="cpf" id="cpf" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="telephone">Telefone</Label>
                                    <Input type="number" name="telephone" id="telephone" />
                                </FormGroup>
    
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

const AddClienteWithRouter = withRouter(AddCliente);

export default AddClienteWithRouter;