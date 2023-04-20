import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function GraphicalInfo3() {
  return (
    <>
      <Row className="section-container ">
        <Col className="section-container-in">
          <div>
            <p className="section-text-2">Gain clarity of mind</p>
            <p className="section-text-3">like you've never had it before.</p>
          </div>

          <div className="section-image-tile">
            <img
              src="https://tinyurl.com/5n8p7vcm"
              alt="clarity"
              className="section-img-1"
            />
          </div>

          {/* <hr />
          <img
            src="https://tinyurl.com/5n8p7vcm"
            alt="clarity"
            className="section-img"
          />

          <p className="section-text">
            Gain clarity of mind like you've never had it before.
          </p> */}
        </Col>
      </Row>
    </>
  );
}
/*To do

Nuro style anmations

*/

export default GraphicalInfo3;
