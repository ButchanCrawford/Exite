import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function GraphicalInfo4() {
  return (
    <>
      <Row className="section-container ">
        <Col className="section-container-in">
          <video width="320" height="240" autoplay>
            <source
              src="exite\src\components\assets\videos\pexels-yaroslav-shuraev-4154532-3840x2160-24fps.mp4"
              type="video/mp4"
            ></source>
            {/* <source src="movie.ogg" type="video/ogg"></source> */}
            Your browser does not support the video tag.
          </video>
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
