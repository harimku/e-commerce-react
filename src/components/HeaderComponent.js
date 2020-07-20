import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Jumbotron, 
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            isNavOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }

    handleSearch(event) {
        alert(`Searching for: ${this.search.value}`);
    }

    render() {
        return (
            <React.Fragment> 
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row center">
                            <div className="col-sm-2">
                                <Link to='/home'><img src="/assets/images/logo.png" height="100" width="100" alt="Melomato marketplace logo" /></Link> 
                            </div>
                            <div className="col-sm-6">
                                <Form onSubmit={this.handleSearch}>
                                    <Label htmlFor="search" />
                                    <Input type="text" id="search" name="search" placeholder=" Search.. "
                                        innerRef={input => this.search = input} /> 
                                </Form>
                            </div>
                            <div className="col-sm-3 align-self-center mr-0">
                                <Button color="link" onClick={this.toggleModal} >
                                    <i className="fa fa-user-circle-o fa-md" /> Login
                                </Button>
                                <Link to='/home'>
                                    <Button color="link">
                                        <i className="fa fa-shopping-cart fa-md" /> Cart
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar light expand="sm">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/homedecor">
                                        Home & Decor
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/automotive">
                                        Automotive
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/electronics">
                                        Electronics
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/fashion">
                                        Fashion
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/outdoors">
                                        Outdoors
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/pet">
                                        Pet
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                    
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" 
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" 
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" 
                                        innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="info">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>

            </React.Fragment>
        );
    }
}

export default Header;