import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./CardFooter.css";

const CardFooter = () => {
  return (
    <div className="d-flex justify-content-between card-footer-css">
      <div>
        <span className="mr-2">
          <FontAwesomeIcon icon={faCheck} />{" "}
        </span>
        Personal Accident Driver
      </div>
      <div className="ml-5">
        <span className="mr-2">
          <FontAwesomeIcon icon={faCheck} />{" "}
        </span>
        Personal Accident Passenger
      </div>
      <div className="ml-5">
        <span className="mr-2">
          <FontAwesomeIcon icon={faCheck} />{" "}
        </span>
        Replacement Vehicle
      </div>
      <div className="ml-5">
        <span className="mr-2">
          <FontAwesomeIcon icon={faCheck} />{" "}
        </span>
        Roadside Assistance
      </div>
    </div>
  );
};

export default CardFooter;
