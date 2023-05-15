import React from "react";
import { Container, Navbar } from "react-bootstrap";

const BaseHeader = ({ selectedYear }) => {
  return (
    <div>
      <header>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Container className="justify-content-center box-herder-nav">
            <Navbar.Brand href="#">
              Nobel Prize {selectedYear ? `ประจำปี ค.ศ. ${selectedYear}` : ""}
            </Navbar.Brand>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default BaseHeader;
