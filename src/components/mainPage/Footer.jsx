import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IconName } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Footer() {
  const navigate = useNavigate();

  function onFooterLinkSelected(event) {
    switch (event.target.id) {
      case "blog":
        navigate("/blog");
        break;
      case "subscription":
        navigate("/subscribe");
        break;
      case "about":
        navigate("/about");
        break;
      case "contact":
        navigate("/contact");
        break;
      case "press":
        navigate("/press");
        break;
      case "career":
        navigate("/careers");
        break;
      case "faq":
        navigate("faq");
        break;
      case "whats-next":
        navigate("/next");
        break;
      default:
    }
  }

  return (
    <>
      {/* <Container> */}
      <Row className="footer-main pt-3">
        <br />
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
              <div className="footer-contact-btn mx-2">
                {" "}
                <p className="footer-contact-btn-text ">Submit</p>
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
            <a
              className="footer-clickable-text-individual= "
              href="mailto:butchancrawf@gmail.com"
            >
              <p className="footer-clickable-text-individual">Contact</p>
            </a>

            <p
              className="footer-clickable-text-individual"
              onClick={onFooterLinkSelected}
              id="subscription"
            >
              Subscription
            </p>
            <p className="footer-clickable-text-individual">About</p>
          </Col>
          <Col className=" bordertest1-dnone ">
            <p
              className="footer-clickable-text-individual "
              onClick={onFooterLinkSelected}
              id="press"
            >
              Press
            </p>
            <p
              className="footer-clickable-text-individual"
              id="career"
              onClick={onFooterLinkSelected}
            >
              Careers
            </p>
            <p
              className="footer-clickable-text-individual"
              id="faq"
              onClick={onFooterLinkSelected}
            >
              Faq
            </p>
          </Col>
        </Col>{" "}
        .
      </Row>
      <Row className="footer-main pt-5 px-5 ">
        <Col className="  ">
          <div className="d-flex footer-icons-container">
            <a href="https://www.linkedin.com/in/bdkc/" target="_blank">
              <div className="footer-icon">
                <BsLinkedin size={30} />
              </div>
            </a>
            <a href="https://github.com/ButchanCrawford" target="_blank">
              {" "}
              <div className="footer-icon">
                <BsGithub size={30} />
              </div>
            </a>
            <a href="mailto:butchancrawf@gmail.com">
              <div className="footer-icon">
                <IoIosMail size={36} />
              </div>
            </a>
          </div>
        </Col>
        <Col className="d-flex bordertest1-dnone footer-tm-container">
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
