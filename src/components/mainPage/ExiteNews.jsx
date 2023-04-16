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
                <p>Exite gets funded by the DOD</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="news-tile">
              <div className="news-image"></div>
              <div className="news-title">
                <p>Exite rated best workplace</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="news-tile">
              <div className="news-image"></div>
              <div className="news-title">
                <p>Exite found gold</p>
              </div>
            </div>
          </Col>
        </Row>
        <br />
        <Row>
          <div>
            <Button>View All News</Button>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default ExiteNews;
