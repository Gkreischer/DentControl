import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  Input,
  Form,
  FormGroup,
  Label,
  Button
} from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    
    if(this.state.email === 'admin@email.com' && this.state.password === '123'){
      console.log('Usuario cadastrado.');
      this.props.isLogged(true);
    } else {
      console.log('Usuario nao reconhecido ou senha incorreta');
    }
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="d-flex justify-content-center align-self-center ">
            <Col md="4" xs="12">
              <Card className="mt-5">
                <CardImg
                  top
                  width="10%"
                  src={require("./../shared/images/logo.jpeg")}
                  alt="Logo da empresa"
                />
                <CardBody>
                  <Container>
                    <Row className="d-flex justify-content-center">
                      <Col md="10" xs="12">
                        <Form onSubmit={this.handleSubmit}>
                          <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                              type="email"
                              name="email"
                              id="email"
                              value={this.state.email}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="password">Senha</Label>
                            <Input
                              type="password"
                              name="password"
                              id="password"
                              value={this.state.password}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                          <FormGroup className="text-center">
                            <Button color="primary">Login</Button>
                          </FormGroup>
                        </Form>
                      </Col>
                    </Row>
                  </Container>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Login;
