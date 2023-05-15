import React from "react";
import { Card } from "react-bootstrap";

function BaseCard({ laureate }) {
  return (
    <div className="pb-3">
      <Card>
        <Card.Body>
          <Card.Title>{laureate?.fullName?.en}</Card.Title>
          <Card.Text>{laureate?.motivation?.en}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BaseCard;
