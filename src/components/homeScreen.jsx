import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';


class HomeScreen extends Component {
    state = {  }
    render() { 
        return ( 
            <Container>
                <Row>
                    <Col>
                        <div className="info-container" id="home">
                            <h1 className="info">Luka Matuzić</h1>
                            <hr/>
                            <h3 className="info">Frontend Developer</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
         );
    }
}
 
export default HomeScreen;