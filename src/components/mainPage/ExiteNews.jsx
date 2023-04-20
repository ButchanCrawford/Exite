import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function ExiteNews() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <p className="news-header">Exite In The News</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <div className="news-tile">
              <div className="news-image"></div>
              <div className="news-title">
                <p>Veterans Affairs </p>
                <p>Exite gets funded by the DOD</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="news-tile">
              <div className="news-image"></div>
              <div className="news-title">
                <p>Job ranking</p>
                <p>Exite rated best workplace</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="news-tile">
              <div className="news-image"></div>
              <div className="news-title">
                <p>Exite</p>
                <p>Exite new plans for fy-2024</p>
              </div>
            </div>
          </Col>
        </Row>
        <br />
        <div className="d-flex">
          <div className="news-btn">
            <p className="news-btn-text">View All News</p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ExiteNews;
