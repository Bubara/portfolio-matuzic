import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class NavBar extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }


    render() { 
        return ( 

        
            <div>
                <Navbar className="navbar" expand="md">
                    <NavbarBrand className="brand" href="#home"><FontAwesomeIcon icon="home"></FontAwesomeIcon></NavbarBrand>

                    <NavbarToggler onClick={this.toggle}>
                        <div className="toggle-menu"></div>
                        <div className="toggle-menu"></div>
                        <div className="toggle-menu"></div>
                    </NavbarToggler>

                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" href="#profile">Profile</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" href="#education">Education</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" href="#certificates">Certificates</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" href="#projects">Projects</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" href="#technologies">Technologies</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" href="#contact">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
         );
    }
}
 
export default NavBar;