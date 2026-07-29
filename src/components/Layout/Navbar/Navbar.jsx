import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo/rentVerseLogo.png";
import "./Navbar.css";

function NavigationBar() {
  return (
    <Navbar
      bg="white"
      expand="lg"
      sticky="top"
      className="shadow-sm py-2"
    >
      <Container>

        <Navbar.Brand as={NavLink} to="/">
          <img
            src={logo}
            alt="RenteVerse"
            className="logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar" />

        <Navbar.Collapse id="navbar">

          <Nav className="ms-auto me-4">

            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/products">
              Products
            </Nav.Link>

            <Nav.Link href="#">
              Categories
            </Nav.Link>

            <Nav.Link href="#">
              About
            </Nav.Link>

          </Nav>

          <Nav className="align-items-center">

            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>

            <Button
              as={NavLink}
              to="/register"
              variant="primary"
              className="ms-3 px-4 rounded-pill"
            >
              Register
            </Button>

          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavigationBar;