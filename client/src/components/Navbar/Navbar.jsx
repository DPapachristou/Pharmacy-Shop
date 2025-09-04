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
  
// Logout
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
  };

  return (
    <Navbar className="NavB" expand>
      <Container className="navCont">
        <div className="navLogo">
          <Link to="/">Pharmacy</Link>
          </div>
          <Nav className="navCenter">
            {user?.isAdmin && (
              <Nav.Link as={Link} to="/newArticle">ADD NEW PRODUCT</Nav.Link>
             )}
            </Nav>
           <div className="navRight">
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
        </div>
      </Container>
    </Navbar>
 );
}

export default Navbara;
