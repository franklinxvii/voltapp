import { Navbar,Container, Nav} from 'react-bootstrap';
import { Link} from "react-router-dom"
function Navi () {
    return (       
            <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/">Voltapp</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link as={Link} to={"/"}>Etat</Nav.Link>
                <Nav.Link as={Link} to={"/rapport"}> Rapport</Nav.Link>
                </Nav>
            </Container>
            </Navbar>  
    )
}






export default Navi;