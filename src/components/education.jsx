import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';


class Education extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="education-container" id="education">
                <h1 className="education-title">Education</h1>
                    <hr className="hr-education" />

                    <Container className="education-container">
                    <Row>
                        <Col className="edu-col" lg={6}>
                            <h3 className="edu-h3"><strong>University of Rijeka</strong></h3>
                            <p className="education-date">Oct 2014 - Jul 2017</p>
                            <h5>Bachelor's Degree</h5>
                            <p className="p-education">Two-subject undergraduate study of Computer Science and Philosophy at the University of Rijeka</p>
                        </Col>

                        <Col className="edu-col" lg={6}>
                            <h3 className="edu-h3"><strong>University of Rijeka</strong></h3>
                            <p className="education-date">Oct 2017 - Jul 2019</p>
                            <h5>Master's Degree</h5>
                            <p className="p-education">Graduate Study of the Department of Computer Science in Rijeka</p>
                            <p className="p-education">Module - Information and Communication Systems</p>
                        </Col>
                    </Row>
                    </Container>
            </div>     
         );
    }
}
 
export default Education;