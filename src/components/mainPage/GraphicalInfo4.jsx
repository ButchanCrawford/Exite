import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import videoMain from "../assets/videos/videoMain.mp4";

function GraphicalInfo4() {
  return (
    <>
      <Row className="section-container">
        <Col className="section-container-in">
          <div>
            <p className="section-text-2">Exite is here to make</p>
            <p className="section-text-2">every life a whole lot better.</p>
          </div>
          <div className="dis-block">
            <video
              src={videoMain}
              type="video/mp4"
              width="900"
              height="680"
              // controls
              muted
              autoplay="autoplay"
              //   loop
            ></video>
          </div>
        </Col>
      </Row>
    </>
  );
}

/*To do

Nuro style anmations

*/

export default GraphicalInfo4;
