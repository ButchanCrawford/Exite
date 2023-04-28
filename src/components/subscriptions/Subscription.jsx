import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Subscription() {
  return (
    <>
      <Row>
        <div className="d-flex ">
          <p className="flex-plans-text-1">Flexible</p>{" "}
          <p className="flex-plans-text-2">Plans</p>
        </div>
        <div>
          <p>Chose a plan thayt works best for you.</p>
        </div>
      </Row>

      <Row>
        <div className="sub-card-container">
          <div className="sub-card-cont-inner">
            <Col lg={4}>
              <div className="sub-card-card">
                <div className="sub-card-plan">Basic</div>
                {/* <div className="sub-card-gb">100GB</div> */}
                <div className="sub-card-monthly-text">$50 monthly</div>
                <div className="sub-card-button">Purchase</div>
                <hr />
                <div className="sub-card-benefits">
                  <ul>
                    <li className="sub-card-li">2 stays monthly</li>
                    <li className="sub-card-li">Single member</li>
                    <li className="sub-card-li">Single user benefits</li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col lg={4}>
              {" "}
              <div className="sub-card-card">
                <div className="sub-card-plan">Standard</div>
                {/* <div className="sub-card-gb">300GB</div> */}
                <div className="sub-card-monthly-text">$70 monthly</div>
                <div className="sub-card-button">Purchase</div>
                <hr />
                <div className="sub-card-benefits">
                  <ul>
                    <li className="sub-card-li"> 3 stays monthly</li>
                    <li className="sub-card-li">Two Members</li>
                    <li className="sub-card-li">Extra member benifts</li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="sub-card-card">
                <div className="sub-card-plan">Zen</div>
                {/* <div className="sub-card-gb">2TB</div> */}
                <div className="sub-card-monthly-text">$100 monthly</div>
                <div className="sub-card-button">Purchase</div>
                <hr />
                <div className="sub-card-benefits">
                  <ul>
                    <li className="sub-card-li"> 8 stays monthly</li>
                    <li className="sub-card-li">Two Members</li>
                    <li className="sub-card-li">Extra member benifts</li>
                  </ul>
                </div>
              </div>
            </Col>
          </div>
        </div>
      </Row>

      <Row>
        <Col>
          <p>
            What's a plan? Members purchase a subscription to a plan. You can
            also include protected file downloads with a plan or sell downloads
            standalone.
          </p>
        </Col>
        <Col>
          <p>
            Can I change plans or cancel at any time? Absolutely. You can
            upgrade, downgrade, or cancel at any time. The paid plans are billed
            month to month. We don't have any long term contracts.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Can I change plans or cancel at any time? Absolutely. You can
            upgrade, downgrade, or cancel at any time. The paid plans are billed
            month to month. We don't have any long term contracts.
          </p>
        </Col>
        <Col>
          <p>
            Can I change plans or cancel at any time? Absolutely. You can
            upgrade, downgrade, or cancel at any time. The paid plans are billed
            month to month. We don't have any long term contracts.
          </p>
        </Col>
      </Row>
    </>
  );
}

export default Subscription;
