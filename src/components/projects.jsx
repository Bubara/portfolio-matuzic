import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';

class Projects extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="project-container" id="projects">
                <h1 className="project-h1">Projects</h1>
            
                <Container>
                    <Row>
                        <Col>
                            <h3 className="project-h3">Haus Adria Real Estates</h3>
                            <p className="project-p">Real Estate Agency Haus Adria is a licensed real estate agency with
                            headquarters in Duga Resa. For them, I created a web site that was necessary since they were still
                            a new company and they needed to be advertised online. In the plan for the future, and in
                            agreement with the owner of the company, is to make a Search option for potential customers to search
                            real estate by counties, size of the surface, number of floors, etc. Thus it is planned, along with regular
                            maintenance, to make a certain filter with increasing number of real estates on the website itself. There is currently
                            6 real estates from Karlovac and Zadar County arranged in the form of cards with abbreviations and
                            symbols for their surface, location, price and type of agreement (purchase, rent, demand).</p>
                            <p className="project-p-url">Link to page:</p> 
                            <a className="project-url" href="https://www.hausadria.com.hr/">Haus Adria Real Estates</a>
                        </Col>
                    </Row>
                </Container>
            </div>
         );
    }
}
 
export default Projects;