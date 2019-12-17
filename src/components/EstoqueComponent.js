import React, { Component } from "react";
import { Container, Row, Col, Jumbotron, Card, CardBody } from "reactstrap";
class Estoque extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col>
              <Jumbotron className="mt-3 mt-md-5">
                
                <Container fluid>
                <h1>Estoque</h1>
                  <Row>
                    <Col md="6" xs="12">
                      <Card>
                        <CardBody>
                          <p>Itens</p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="6" xs="12">
                      <Card>
                        <CardBody>
                          <p>Itens acabando</p>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Estoque;
