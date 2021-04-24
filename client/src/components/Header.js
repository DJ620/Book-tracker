import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import token from "../utils/token";
import { useLocation, useHistory } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const history = useHistory();
  const [username, setUsername] = useState(null);

  useEffect(() => {
    if (token.getUsername()) {
      setUsername(token.getUsername());
    } else {
      setUsername(null);
    };
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <div className="mb-5">
    <Navbar bg="secondary" expand="sm" fixed="top" className="shadow">
      <Navbar.Brand href="/collection">Reading Tracker</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {username ? <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/collection">{username}'s Books</Nav.Link>
          <Nav.Link href="/search">Book Search</Nav.Link>
          <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse> : null}
    </Navbar>
    </div>
  );
};

export default Header;
