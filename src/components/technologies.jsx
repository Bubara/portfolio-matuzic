import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Technologies extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="tech-container" id="technologies">
            <h1 className="tech-h1">Technologies</h1>
        
            <Container>
                <Row>
                    <Col lg={6}>
                       <ul className="no-bullet">
                           <li className="tech-li">
                                <span className="tech-name">HTML5</span>
                                <span>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                </span>
                           </li>

                           <li className="tech-li">
                                <span className="tech-name">CSS3</span>
                                <span>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                </span>
                           </li>

                           <li className="tech-li">
                                <span className="tech-name">Bootstrap</span>
                                <span>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                </span>
                           </li>

                           <li className="tech-li">
                                <span className="tech-name">JavaScript</span>
                                <span>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                </span>
                           </li>

                           <li className="tech-li">
                                <span className="tech-name">React</span> 
                                <span>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                </span>
                            </li>

                           <li className="tech-li">
                                <span className="tech-name">JSON</span>
                                <span>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                </span>
                           </li>
                       </ul>
                    </Col>

                    <Col lg={6}>
                       <ul className="no-bullet">
                           <li className="tech-li">
                                <span className="tech-name">SASS</span>
                                <span>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                </span>
                           </li>

                           <li className="tech-li">
                                <span className="tech-name">SEO</span>
                                <span>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                </span>
                           </li>

                           <li className="tech-li">
                                <span className="tech-name">Node.js</span>
                                <span>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                </span>
                           </li>

                           <li className="tech-li">
                                <span className="tech-name">Express</span>
                                <span>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                </span>
                           </li>

                           <li className="tech-li">
                                <span className="tech-name">MongoDB</span> 
                                <span>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                </span>
                            </li>

                           <li className="tech-li">
                                <span className="tech-name">jQuery</span>
                                <span>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                    <FontAwesomeIcon className="star" icon="star"></FontAwesomeIcon>
                                </span>
                           </li>
                       </ul>
                    </Col>
                </Row>
            </Container>
        </div>
         );
    }
}
 
export default Technologies;