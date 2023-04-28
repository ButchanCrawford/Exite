import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Careers() {
  return (
    <>
      <Row className=" d-none">
        <Col>
          <div className="header-container d-noneo ">
            <img
              className="career-header-img"
              src="https://tinyurl.com/44we7ud6"
              alt="careerpicture"
            />
            <div className="career-header-text-container d-flex">
              <p className="career-page-header">Careers</p>
            </div>
          </div>
        </Col>
      </Row>
      <br />
      <Row>
        <div className="">
          <div className="">
            <p className="career-section2-header">Exite exists to make every</p>
            <p className="career-section2-header">
              life better through wellness
            </p>
          </div>
        </div>

        <div>
          <div className="roles-btn d-flex">
            <p className="roles-btn-text">See Open roles</p>{" "}
          </div>
        </div>

        <div className="roles-sub-img-container">
          <img
            className="roles-sub-image"
            src="https://tinyurl.com/5cvmymw6"
            alt=""
          />
        </div>
      </Row>
      <br />

      <Row>
        <Col>
          <div>
            {" "}
            <p className="diversity-main-text"> Diversity and inclusion.</p>
          </div>
          <div>
            {" "}
            <p>
              We’re committed to creating a business that reflects our belief in
              the importance of a world in which everyone is welcomed, everyone
              is accepted, and everyone is valued.
            </p>
            <br />
            <p>
              Building Diversity, Inclusion and Belonging strategy increases
              belonging internally and across Nuro’s key communities: employees,
              board members, investors, customers, and the communities in which
              we operate.
            </p>
          </div>
        </Col>
        <Col>
          <div className="diversity-img-container">
            <img
              src="https://nuro.imgix.net/DIBs-Collage-3.jpg?w=1024&fit=max&auto=format&auto=compress"
              alt="diversity and inclusion"
            />
          </div>
        </Col>
      </Row>
      <br />
      <br />
      <br />

      <Row>
        <Col>
          <p className="company-awards-title">A world-class company</p>
        </Col>
        <Col>
          <p className="company-awards-text">
            Building this team has been our proudest accomplishment to date—and
            we’re honored others have taken notice.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src="" alt="" />
          <div className="award-tile"></div>
        </Col>
        <Col>
          <img src="" alt="" />
          <div className="award-tile"> </div>{" "}
        </Col>
        <Col>
          <img src="" alt="" />
          <div className="award-tile"></div>{" "}
        </Col>
      </Row>
      <br />

      <Row className="current-roles-section">
        <p>Search current roles</p>
        <Col>
          <Form.Select aria-label="Default select example">
            <option>Job family filter</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <p></p>
        </Col>
        <Col>
          <Form.Select aria-label="Default select example">
            <option>Location filter</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>

          <p></p>
        </Col>
        <Col className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search role"
            //   onChange={onSearhFormChanged}
            //   onKeyPress={onEnterToSearch}
            className=""
          />
          <Button
            className=""
            variant="primary"
            // onClick={onSearchClicked}
          >
            Search
          </Button>
        </Col>
      </Row>
      <Row className="current-roles-section">
        <div>Results here..</div>
      </Row>
    </>
  );
}

export default Careers;
