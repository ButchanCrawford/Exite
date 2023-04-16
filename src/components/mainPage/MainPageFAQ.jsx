import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function MainPageFaq() {
  return (
    <>
      {/* <Container> */}
      <Row className="main-faq">
        <Col>
          <div className="faq-header">
            <p>You might have questions..</p>
            <p>We have answers.</p>
          </div>
          <div className="faq-main-questions">
            <p>What exactly is Exite</p>
            <p>How do I get started?</p>
          </div>
          <div>
            <Button>View all FAQs</Button>
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
