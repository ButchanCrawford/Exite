import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/exite.css";

function Landing() {
  return (
    // <Container>
    <Row className="landing-main bordertest">
      <Col className="landing-m bordertest1 ">
        <img
          className="landing-img bordertest1"
          src="https://tinyurl.com/yckjvraj"
          alt="Landing"
        />

        <div className="landing-text">
          {/* <p className="">
              The Vast majorty of the population spends entirely too much time
              connected to technology
            </p> */}
          <p>Less tech</p>
          <p>More clarity</p>

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
