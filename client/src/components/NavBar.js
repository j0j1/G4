import { Link } from "react-router-dom"
import styled from 'styled-components'
import LogoRange from "./Geometrics/LogoRange"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBar1 = () => {
    return (
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/"><G4Range><LogoRange height={"100%"} fill={"#F9F5F3"}/></G4Range></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/team">Team</Nav.Link>
                            <NavDropdown title="Departments" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/department/justice">Justice</NavDropdown.Item>
                                <NavDropdown.Item href="/department/education">Education</NavDropdown.Item>
                                <NavDropdown.Item href="/department/reachinghome">ReachingHome</NavDropdown.Item>
                                <NavDropdown.Item href="/department/health">Health</NavDropdown.Item>
                                <NavDropdown.Item href="/department/childservices">Child and Family Services</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/events">Events</Nav.Link>
                            <Nav.Link href="/Contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

const G4Range= styled.div`
    height:10vh;
    @media (max-width: 385px) {
        height:6vh;
    }
`

export default NavBar1;