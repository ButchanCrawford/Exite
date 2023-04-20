import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function GraphicalInfo1() {
  return (
    <>
      <Row className="section-container">
        <Col className="section-container-in">
          <div>
            <p className="section-text-1">Meet Exite</p>
            <p className="section-text-2">A brand new way to go remote</p>
            <p className="section-text-2">and disconnect from technology</p>
            <p className="section-text-3">
              with the help of mother nature herself.
            </p>
          </div>

          <div className="section-image-tile">
            <img
              src="https://tinyurl.com/ytezd4nf"
              alt="Dark camping"
              className="section-img-1"
            />
          </div>
        </Col>
      </Row>
    </>
  );
}

/*To do

Nuro style anmations

*/

export default GraphicalInfo1;
