import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


const Header = () => {

    return (
        <NavBar bg="dark" variant="dark">
            <Container fluid>
                <NavBar.Brand href="/" style={{"color":'gold'}}>
                    <FontAwesomeIcon icon={faVideoSlash} />MovieGold
                </NavBar.Brand>
                <NavBar.Toggle aria-controls="navbarScroll" />
                <NavBar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        >
                        <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
                        <NavLink to="/Watchlist" className="nav-link" activeClassName="active">Watch List</NavLink>
                    </Nav>
                        <Button variant="outline-info">Login</Button>
                        <Button variant="outline-info">Sign Up</Button>
                    </NavBar.Collapse>
            </Container>
        </NavBar>
  )
}

export default Header