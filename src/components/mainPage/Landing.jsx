import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/exite.css";

function Landing() {
  return (
    // <Container>
    <Row className="landing-main bordertest">
      <Col lg={12} className="landing-m bordertest1 ">
        <div>
          <img
            className="landing-img bordertest11"
            src="https://tinyurl.com/yckjvraj"
            alt="Landing"
          />
        </div>

        <div className="landing-text">
          <p>Less tech</p>
          <p className="text-clarity">More clarity</p>

          <p className="landing-text-two">
            Take a break from technology and exit to connect with nature
          </p>
        </div>
      </Col>
    </Row>
    // </Container>
  );
}

/*
To fix:
add better font styles to css
change wording to be more concise
get image to fit across entire screen
image extends beyond its main div - I hard coded div height
get image to be responsive

*/

export default Landing;
