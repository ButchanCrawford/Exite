import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function MainPageFaq() {
  return (
    <>
      {/* <Container> */}
      <Row className="main-faq">
        <Col>
          <div className="faq-mr">
            <div className="faq-header">
              <p>You might have questions..</p>
              <p>We have answers.</p>
            </div>

            <div className="faq-main-questions mt-4">
              <p className="faq-question-main">What exactly is Exite?</p>
              <p className="faq-question-main">How do I get started?</p>
            </div>
            <div className="d-flex">
              <div className="faq-btn mt-4">
                {" "}
                <p className="faq-btn-text">View all FAQs</p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
        </Col>
      </Row>

      {/* </Container> */}
    </>
  );
}

export default MainPageFaq;
