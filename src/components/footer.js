import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div
      className="margin-top-30"
      style={{ background: "black", color: "white" }}
    >
      <Container>
        <Row>
          <Col md={4}>
            <h6 className="margin-10">LINKS</h6>
            <div>
              <p>
                {" "}
                <i className="bi bi-house-door margin-10"></i>
                <Link className="footer-links" to="/home">
                  Home
                </Link>
              </p>
              <p>
                <i className="bi bi-box-seam margin-10"></i>
                <Link className="footer-links" to="/package">
                  Package
                </Link>
              </p>
              <p>
                <i className="bi bi-lamp margin-10"></i>
                <Link className="footer-links" to="/contact">
                  Ideas
                </Link>
              </p>
              <p>
                <i className="bi bi-person margin-10"></i>{" "}
                <Link className="footer-links" to="/about">
                  About Us
                </Link>{" "}
              </p>
            </div>
          </Col>

          <Col md={4}>
            <h6 className="margin-10">CONTACT</h6>
            <p>
              <i class="bi bi-cursor margin-10"></i>E504,Ayaan Building No2,
              Ubalenager, Opp.sai satyam park, Wagholi ,Pune 412207
            </p>

            <p>
              <i class="bi bi-phone margin-10"></i>Mob : +91 89835 00938
            </p>

            <p>
              <i class="bi bi-envelope-open margin-10"></i>Email:
              info@smartautoware.com
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
