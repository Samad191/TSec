import React from "react";
import "./Footer.scss";
import { Container, Row, Col } from "react-bootstrap";

function MyFooter() {
  return (
    <div className="footer_main">
      <Container>
        <Row>
          <Col xs={12} sm={4}>
            <img className="consensys_logo" src="https://consensys.io/assets/images/logo.svg" alt="logo" />
          </Col>

          <Col xs={12} sm={4}>
            <h5>Products</h5>
            <h5>Company</h5>
            <h5>Blog</h5>
          </Col>

          <Col xs={12} sm={4}>
            <h5>Log In</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyFooter;
