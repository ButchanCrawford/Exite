import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "../assets/exite.css";

function NaviBar() {
  return (
    <React.Fragment>
      <Navbar className="navbar-bg-colour" expand="lg">
        <Container className="nav-container">
          <div className="navi-left">
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse>
              <Nav className="me-auto">
                <Nav.Link>Learn More</Nav.Link>
                <Nav.Link>Technology</Nav.Link>
                <Nav.Link>The Team</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
          <div className="navi-center">
            <Navbar.Brand className="">
              <p className="brand-textl">Exite</p>
            </Navbar.Brand>
          </div>
          <div className="navi-right">
            <Button>Menu</Button>
          </div>

          {/* <div className="menu-drop-button">Menu</div> */}
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

/*
To fix:
Navbar too large
perfectly centger "Exite" and add font decoation
fix navbar to top
make navbar blend into background into webpage when scrolling down
dropdown more options when menu btn is clicked

*/
export default NaviBar;
