import React, { Component }  from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import ReactSearchBox from 'react-search-box';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <React.Fragment> 
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col-3 col-sm-2 align-self-center">
                                <a href="/"><img src="/assets/images/logo.png" height="100" width="100" alt="Melomato marketplace logo" /></a> 
                            </div>
                            <div className="col col-sm-7 flexsearch align-self-center pl-0">
                                <ReactSearchBox
                                    searchAsYouType={true}
                                    placeholder="Search.."
                                />
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar light sticky="top" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/">
                                        Home & Decor
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/directory">
                                        Automotive
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        Electronics
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        Fashion
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        Outdoors
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        Pet
                                    </NavLink>
                                </NavItem>

                            </Nav>
                    </div>
                </Navbar>
                    

            </React.Fragment>
        );
    }
}

export default Header;