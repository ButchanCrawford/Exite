import React from "react";
import { Navbar, Container, Nav, Button, Row, Col } from "react-bootstrap";
import "../assets/exite.css";

function NaviBar() {
  return (
    <React.Fragment>
      <Row>
        <Col lg={12}>
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
                <div className="nav-btn">
                  <p className="nav-btn-text">Menu</p>
                </div>
              </div>

              {/* <div className="menu-drop-button">Menu</div> */}
            </Container>
          </Navbar>
        </Col>
      </Row>
    </React.Fragment>
  );
}

/*
To fix:
Navbar too large
perfectly center "Exite" and add font decoation
fix navbar to top
make navbar blend into background into webpage when scrolling down
dropdown more options when menu btn is clicked

*/
export default NaviBar;
