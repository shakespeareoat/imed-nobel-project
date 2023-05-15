import { Col, Row } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="p-4">
      <Header />
      <Row className="my-3 mx-0 p-0">
        <Col md={3} className="bg-light">
          filters
        </Col>
        <Col md={9} className="p-0">
          <div className="px-4 content">CONTENT</div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
