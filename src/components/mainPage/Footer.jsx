import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <>
      {/* <Container> */}
      <Row className="footer-main">
        <Col className="bordertest1-dnone mx-5">
          <p className="stay-con-text">Stay connected</p>
          <div className="form-container">
            <div className="d-flex">
              {/* <div className="d-flex footer-form-div mb-1 ">
              <input type="text" placeholder="form version 1  " />
              <button>submit</button>
            </div> */}
              <input
                className="contact-form"
                type="text"
                id="email"
                placeholder="Enter email"
              />
              <div className="footer-contact-btn">
                {" "}
                <p className="footer-contact-btn-text">Submit</p>
              </div>
            </div>
          </div>

          <div>
            <p className="form-disclaimer">
              by clicking submit, you have agreed to our have a good day policy.
            </p>
          </div>
        </Col>
        <Col className="d-flex  footer-clickable-text bordertest1-dnone ">
          <Col className=" bordertest1-dnone ">
            <p className="footer-clickable-text-individual">Blog</p>
            <p className="footer-clickable-text-individual">Subscription</p>
            <p className="footer-clickable-text-individual">About</p>
            <p className="footer-clickable-text-individual">Contact</p>
          </Col>
          <Col className=" bordertest1-dnone ">
            <p className="footer-clickable-text-individual">Press</p>
            <p className="footer-clickable-text-individual">Careers</p>
            <p className="footer-clickable-text-individual">Faq</p>
            <p className="footer-clickable-text-individual">What's next</p>
          </Col>
        </Col>{" "}
        .
      </Row>
      <Row className="footer-main pt-5 px-5 ">
        <Col className="d-flex bordertest1-dnone">
          <p className="mr-icon footer-clickable-text-individual">
            iconLinkedin
          </p>
          <p className="mr-icon footer-clickable-text-individual">iconGitHub</p>
          <p className="mr-icon footer-clickable-text-individual">iconPhone</p>
        </Col>
        <Col className="d-flex bordertest1-dnone">
          <p className=" mr-icon  "> @ 2023 Exite</p>
          <p className=" footer-clickable-text-individual">
            {" "}
            -Good day policy{" "}
          </p>
        </Col>
      </Row>
      {/* </Container> */}
    </>
  );
}

export default Footer;
