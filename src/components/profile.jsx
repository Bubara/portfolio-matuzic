import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
 

class Profile extends Component {
    state = {  }
    render() { 
        return (  
                <div className="profile-container" id="profile">
                    <h1 className="profile-title">Profile</h1>

                    <Container className="general-info-container">
                        <p>Student of the last (5th) year of Graduate Study of the Department of Computer Science in Rijeka, module
                            Information and Communication Systems and a future full stack web developer with 1+ years
                            experience in frontend technologies (HTML, CSS, Bootstrap) and intermediate knowledge of JavaScript and React. Currently learning 
                            backend technology such as Node.js, MongoDB, Mongoose,Express. I can easily adapt to the tasks that are given to me and 
                            I <strong>always</strong> get things done by set deadlines.
                        </p>
                    </Container>


                    <Container> 
                        <Row>
                            <Col className="profile-info" lg={4} sm={12}>
                                <h2>About me</h2>
                                <p>Junior Front End developer who is passionate about developing efficient, scalable, responsive and beautiful web applications. 
                                    Skilled in JavaScript, React, HTML, CSS and Bootstrap.</p>
                            </Col>

                            <Col className="profile-info" lg={4} sm={12}>
                                <img className="profile-image" src="https://media.licdn.com/dms/image/C4D03AQF4cJA1L8hvBg/profile-displayphoto-shrink_200_200/0?e=1554940800&v=beta&t=-CoEMz2q9UPT_1RqJ5UpJ3tOT_fS9GpE32Iiqw5g3Nw" alt="profile"/>
                            </Col>

                            <Col className="profile-info" lg={4} sm={12}>
                                <h2>Details</h2>  

                                    <h5><strong>Age:</strong></h5>
                                    <p>23</p>
                                    
                                    <h5><strong>Location:</strong></h5>
                                    <p>Rijeka</p>
                            </Col>
                        </Row>
                    </Container>
                </div>                  
         );
    }
}
 
export default Profile;