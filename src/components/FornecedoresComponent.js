import React from 'react';
import { Table, Button, Row, Col } from 'reactstrap';

const Fornecedores = (props) => {
    return (
        <React.Fragment>
            <Table striped bordered responsive hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Site</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Kavo</td>
                        <td>(47) 3451-0100</td>
                        <td><a href="https://kavo.com">Kavo</a></td>
                        <td><a href="mailto:falecom@kavokerr.com">falecom@kavokerr.com</a></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Gnatus</td>
                        <td>(17) 3321 6999</td>
                        <td><a href="https://www.gnatus.com.br/">Gnatus</a></td>
                        <td><a href="mailto:contato@gnatus.com.br">contato@gnatus.com.br</a></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>DentFlex</td>
                        <td>(16) 2133 0000</td>
                        <td><a href="https://www.gnatus.com.br/">DentFlex</a></td>
                        <td><a href="mailto:dentflex@dentflex.com.br">dentflex@dentflex.com.br</a></td>
                    </tr>
                </tbody>

            </Table>
            <Row className="text-right">
                <Col xs="12" md="12">
                    <Button type="button" color="primary">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </Button>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default Fornecedores;