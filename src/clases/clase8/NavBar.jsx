import { Navbar, Container,Nav, NavDropdown } from "react-bootstrap"
import CartWidget from "./CartWidget"
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Link to='/'>
                <Navbar.Brand >Ecommerce - 41070</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <NavLink to='/categoria/gorras' className={({isActive})=> isActive ? 'Sombra' : 'SinSombra' } >Gorras</NavLink>
                <NavLink to="/categoria/remeras">Remeras</NavLink>               
                </Nav>
                <Nav>
                    {/* <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link> */}
                    <Link to='/cart'>
                        <CartWidget />
                    </Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar