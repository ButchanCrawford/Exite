import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ExiteNews from "./mainPage/ExiteNews";
import MainPageFaq from "./mainPage/MainPageFAQ";

function Press() {
  return (
    <>
      <Row>
        <div className="press-page-header-container">
          <p className="press-page-title">Press</p>
          <p className="press-page-statement">
            long winding press statement. long winding press statement. long
            winding press statement.long winding press statement.long winding
            press statement.long winding press statement.long winding press
            statement.{" "}
          </p>
        </div>
      </Row>
      <div className="press-page-body-container">
        <Row className="">
          <Col lg={4}>
            <p className="press-kit-title">Press Kit</p>
          </Col>
          <Col lg={8}>
            <p className="press-page-statement">
              If you are a reporter with a question, contact us at
              press@nuro.ai. For anything else, please email info@nuro.ai or
              fill out our contact us form.
            </p>
          </Col>
        </Row>
        <Container>
          {" "}
          <Row className="d-flex press-assets-center">
            <Col>
              <div className="press-tile-container">
                <div className="press-tile-image"></div>
                <div className="press-tile-text">
                  <p className="press-tile-kit-link">Logo & brand guidelines</p>
                  <p>Logo images and Exite's brand guidelines.</p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="press-tile-container">
                <div className="press-tile-image"></div>
                <div className="press-tile-text">
                  <p className="press-tile-kit-link">Photography</p>
                  <p>Images inline with our brand.</p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="press-tile-container">
                <div className="press-tile-image"></div>
                <div className="press-tile-text">
                  <p className="press-tile-kit-link">Videos</p>
                  <p>video footage and b-roll.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <ExiteNews />
      <MainPageFaq />
    </>
  );
}

export default Press;
