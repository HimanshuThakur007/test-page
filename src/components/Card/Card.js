import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { RestData } from "../../data";
import { numberWithCommas } from "../../utils/globalFn";
import CardFooter from "../CardFooter/CardFooter";
import CollapseComp from "../Collapse/Collapse";
import "./Card.css";

const Card = () => {
  const [Data, setData] = useState(RestData);
  const [open, setOpen] = useState(false);
  const [openCollapse, setopenCollapse] = useState(0);

  return (
    <div className="mt-4">
      <Container>
        <Row>
          <Col>
            <div className="card-first-container">
              {Data.map((item, index) => (
                <>
                  <div
                    className="card-container"
                    style={{ marginBottom: open ? "20px" : "20px" }}
                  >
                    <div>
                      <div className="box-model">
                        <div className="d-flex justify-content-between">
                          <div style={{ padding: "10px", textAlign: "center" }}>
                            <div>
                              <img
                                src={item.image_url}
                                alt="logo"
                                style={{ width: "20px" }}
                              />
                            </div>
                            <div className="mt-4">
                              {item.provider["en-ae"].name}
                            </div>
                            <div>{item.insurance_type}</div>
                          </div>
                          <div>
                            <div>Third Party Limit</div>
                            <div>
                              {item.covers &&
                                item.covers.map((item) =>
                                  item.name === "thirdPartyPropertyDamage"
                                    ? item.options[0].text
                                    : null
                                )}
                            </div>
                          </div>
                          <div>
                            <div>Agency Repair</div>
                            <div>
                              {item.covers &&
                                item.covers.map((item) =>
                                  item.name === "agencyRepair"
                                    ? item.type
                                    : null
                                )}
                            </div>
                          </div>
                          <div>
                            <div>Excess</div>
                            <div>AED {item.excess}</div>
                          </div>
                          <div>
                            <div>Premium Amount</div>
                            <div>AED {numberWithCommas(item.premium)}</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <CardFooter />
                      </div>
                    </div>
                    <div className="button-wrapper">
                      <Button className="btn btn-primary">Buy Now</Button>
                      <div>
                        <div
                          className="mt-2"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setOpen(!open);
                            setopenCollapse(index);
                          }}
                        >
                          {open ? "Hide details" : "View Details"}
                        </div>
                      </div>
                    </div>
                  </div>
                  {openCollapse === index && <CollapseComp open={open} />}
                </>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Card;
