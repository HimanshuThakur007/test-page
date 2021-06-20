import React from "react";
import { Col, Collapse, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import "./Collapse.css";

const collapse = ({ open }) => {
  return (
    <div style={{ width: "100%" }} className="mb-2 collaspe-component-wrapper">
      <Collapse in={open}>
        <div className="collapse-container">
          <div className="collapse-heading mb-2">Covers</div>
          <Row>
            <Col xs={6}>
              <div className="d-flex justify-content-between">
                <div>
                  <div className="mt-3">Oman Cover</div>
                  <div className="mt-3">Wind Screen Damage</div>
                  <div className="mt-3">Riots or Strikes</div>
                  <div className="mt-3">Fire and Theft Cover</div>
                  <div className="mt-3">Valet Parking Theft</div>
                </div>
                <div>
                  <div className="mt-3">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <div className="mt-3">
                    {" "}
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <div className="mt-3">
                    {" "}
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <div className="mt-3">
                    {" "}
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <div className="mt-3">
                    {" "}
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={6}>
              <div className="d-flex justify-content-between">
                <div>
                  <div className="mt-3">No Claim Discount</div>
                  <div className="mt-3">Emergency Medical Expenses</div>
                  <div className="mt-3"> GCC Cover</div>
                  <div className="mt-3">Off Road Desert</div>
                  <div className="mt-3">Loss or damage to your vehicle</div>
                </div>
                <div>
                  <div className="mt-3">
                    {" "}
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <div className="mt-3">
                    {" "}
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <div className="mt-3">
                    {" "}
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <div className="mt-3">
                    {" "}
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <div className="mt-3">
                    {" "}
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Collapse>
    </div>
  );
};

export default collapse;
