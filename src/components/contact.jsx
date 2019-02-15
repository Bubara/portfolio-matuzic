import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LinkedInLogo from '/home/luka/Desktop/PortfolioWeb/src/linkedin-icon.png'


class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="contact-container" id="contact">
                <h1 className="contact-title">Contact</h1>
                <hr className="hr-contact" />

                    <Container className="contact-container">
                    <Row>
                        <Col className="contact-col">
                            <h5 className="mobile-h5"> 
                                <FontAwesomeIcon className="mobile-icon" icon="mobile"></FontAwesomeIcon> 
                                +385 98 160 2816
                            </h5>

                            <h5 className="mail-h5"> 
                                <FontAwesomeIcon className="mail-icon" icon="envelope"></FontAwesomeIcon> 
                                luka.matuzic1@gmail.com
                            </h5>

                            <h5>
                                <img className="linkedin-logo" src={LinkedInLogo} alt="linked-in-logo"/>
                                <a className="linkedin-url" href="https://www.linkedin.com/in/luka-matuzi%C4%87-a07440158/">LinkedIn</a>
                            </h5> 
                        </Col>

                    </Row>
                    </Container>
            </div>     
         );
    }
}
 
export default Contact;