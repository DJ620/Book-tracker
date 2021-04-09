import Link from "next/link";
import {Navbar, Nav} from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="secondary" expand="lg">
      <Navbar.Brand href="/">Reading Tracker</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/search">Book Search</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
