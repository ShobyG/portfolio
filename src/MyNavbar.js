import { Navbar, Nav, NavLink } from "react-bootstrap";

export default function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="my-navbar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-column">
          <NavLink href="#intro">Summary</NavLink>
          <NavLink href="#summary">Details</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
