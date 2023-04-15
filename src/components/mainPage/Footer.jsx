import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <>
      {/* <Container> */}
      <Row className="footer-main">
        <Col className="bordertest1">
          <div>
            <p>Stay connected</p>
            <div className="d-flex footer-form-div ">
              <input type="text" placeholder="enter your email" />
              <button>submit</button>
            </div>

            <p>
              by clicking submit, you have agreed to our have a great day policy
            </p>
          </div>
        </Col>
        <Col className="d-flex  footer-clickable-text bordertest1 ">
          <Col className=" bordertest1 ">
            <p>Blog</p>
            <p>Subscription</p>
            <p>About</p>
            <p>Contact</p>
          </Col>
          <Col className=" bordertest1 ">
            <p>Press</p>
            <p>Careers</p>
            <p>Faq</p>
            <p>What's next</p>
          </Col>
        </Col>{" "}
        .
      </Row>
      <Row className="footer-main pt-5 ">
        <Col className="d-flex bordertest1">
          <p>linked in</p>
          <p>git-hub</p>
          <p>phone</p>
        </Col>
        <Col className="d-flex bordertest1">
          <p> @ 2023 Exite</p>
          <p> -Good day policy </p>
        </Col>
      </Row>
      {/* </Container> */}
    </>
  );
}

export default Footer;
