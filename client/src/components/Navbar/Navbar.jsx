import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css"
import { useContext } from "react";
import { Context } from "../../context/context";
import { Link } from "react-router-dom";

function Navbara() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
  };

  return (
    <Navbar className="NavB">
      <Container className="navCont">
        <Navbar.Brand as={Link} to="/" className="navLogo">Pharmacy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="basic-navbar-nav">
          <Nav className="me-auto">
            {user?.isAdmin && (
              <Nav.Link as={Link} to="/newArticle">ADD NEW PRODUCT</Nav.Link>
            )}
               {user ? (
              <>
                {user.profilePic && (
                  <Link to="/settings">
                    <img className="topImg" src={PF + user.profilePic} alt="" />
                  </Link>
                )}
                <NavDropdown title="ACCOUNT" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/settings">MY ACCOUNT</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout}>
                    LOGOUT
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <NavDropdown title="ACCOUNT" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/login">LOGIN</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/register">
                    CREATE ACCOUNT
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbara;
