import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import videoMain from "../assets/videos/videoMain.mp4";

function GraphicalInfo4() {
  return (
    <>
      <Row className="section-container">
        <Col className="section-container-in">
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

          <p className="section-textw">
            Exite is here to make every life a whole lot better
          </p>
        </Col>
      </Row>
    </>
  );
}

/*To do

Nuro style anmations

*/

export default GraphicalInfo4;
