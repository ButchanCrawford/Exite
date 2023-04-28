import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/exite.css";
import GraphicalInfo1 from "./GraphicalInfo1";
import GraphicalInfo2 from "./GraphicalInfo2";
import GraphicalInfo3 from "./GraphicalInfo3";
import GraphicalInfo4 from "./GraphicalInfo4";
import ExiteNews from "./ExiteNews";
import MainPageFaq from "./MainPageFAQ";
function Landing() {
  return (
    // <Container>
    <>
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
      <GraphicalInfo1 />
      <GraphicalInfo2 />
      <GraphicalInfo3 />
      <GraphicalInfo4 />
      <ExiteNews />
      <MainPageFaq />
    </>
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
