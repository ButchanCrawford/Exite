import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <input type="text" placeholder="enter your email" />
            <p>
              by clicking submit, you have agreed to our have a great day policy
            </p>
          </Col>
          <Col>
            <Col>
              <p>Blog</p>
              <p>Subscription</p>
              <p>About</p>
              <p>Contact</p>
            </Col>
            <Col>
              <p>Press</p>
              <p>Careers</p>
              <p>Faq</p>
              <p>What's next</p>
            </Col>
          </Col>{" "}
          .
        </Row>
        <Row>
          <Col>
            <p>linked in</p>
            <p>git-hub</p>
            <p>phone</p>
          </Col>
          <Col>
            <p> @ 2023 Exite</p>
            <p> -Good day policy </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
