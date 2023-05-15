import React from "react";
import { Spinner } from "react-bootstrap";

const BaseLoading = () => {
  return (
    <div>
      <div className="text-center mx-auto">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </div>
  );
};

export default BaseLoading;
