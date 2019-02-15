import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';


class Certificates extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="cert-container" id="certificates">
                <h1 className="cert-title">Certificates</h1>
                <hr className="hr-cert" />

                    <Container className="cert-container">
                        <Row>
                            <Col className="cert-col" lg={6}>
                                <h3 className="cert-h3"><strong>JavaScript Basics</strong></h3>
                                <p className="cert-date">Oct 2018 - Nov 2018</p>
                                <h5 className="cert-h5">Learning platform - Code with Mosh</h5>
                                <p className="p-cert">Operators, control flow, objects, arrays, functions.</p>
                            </Col>

                            <Col className="cert-col" lg={6}>
                                <h3 className="cert-h3"><strong>Mastering React</strong></h3>
                                <p className="cert-date">Dec 2018 - Jan 2019</p>
                                <h5 className="cert-h5">Learning platform - Code with Mosh</h5>
                                <p className="p-cert">Components, pagination, filtering, sorting, routes, routing, forms, JSON,
                                    authentification, authorization (login, signup), deploy.</p>
                            </Col>
                        </Row>
                    </Container>
            </div>   
         );
    }
}
 
export default Certificates;