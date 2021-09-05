import React from "react";
import {
  Button,
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Carousel,
  NavDropdown,
  Row,
  Col,
  Image,
  Card,
  CardGroup,
  Jumbotron,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import packageIco from "../images/package.png";
import home from "../images/home-automation.png";
import building from "../images/smart-city.png";
import office from "../images/office.png";
import hotel from "../images/hotel.png";
import hospital from "../images/hospital-bed.png";
import industrial from "../images/industrial.png";
import costPackageIco from "../images/box.png";

import "../css/home.css";

class Package extends React.Component {
  render() {
    return (
      <>
        <Container>
          <div style={{ margin: "70px 0px" }}></div>
          <Jumbotron>
            <div className="text-center">
              <Image
                className="location-ico bounce-1"
                src={packageIco}
                width="10%"
              />
              <h1>AUTOMATION PACKAGES</h1>
              <hr />
              <Row>
                <Col md={4}>
                  <Card border="dark">
                    <Card.Header>Home Automation</Card.Header>
                    <Card.Body>
                      <Image src={home} width="20%" />
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card border="dark">
                    <Card.Header>Building Automation</Card.Header>
                    <Card.Body>
                      <Image src={building} width="20%" />
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card border="dark">
                    <Card.Header>Office Automation</Card.Header>
                    <Card.Body>
                      <Image src={office} width="20%" />
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="margin-10">
                <Col md={4}>
                  <Card border="dark">
                    <Card.Header>Hotel Automation</Card.Header>
                    <Card.Body>
                      <Image src={hotel} width="20%" />
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card border="dark">
                    <Card.Header>Hospital Automation</Card.Header>
                    <Card.Body>
                      <Image src={hospital} width="20%" />
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card border="dark">
                    <Card.Header>Industrial Automation</Card.Header>
                    <Card.Body>
                      <Image src={industrial} width="20%" />
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Jumbotron>
        </Container>
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
                    <i className="bi bi-house-door margin-10"></i>HOME
                  </p>
                  <p>
                    <i className="bi bi-screwdriver margin-10"></i>PACKAGES
                  </p>
                  <p>
                    <i className="bi bi-person margin-10"></i>ABOUT US{" "}
                  </p>
                  <p>
                    <i className="bi bi-telephone margin-10"></i>Contact
                  </p>
                </div>
              </Col>

              <Col md={4}>
                <h6 className="margin-10">CONTACT</h6>
                <p>
                  <i class="bi bi-cursor margin-10"></i>Unit No.3, Building
                  No.1, Ground Floor, Liliya Nagar, Off S.V.Road, Goregaon
                  (West), Mumbai-400 062. India.
                </p>

                <p>
                  <i class="bi bi-phone margin-10"></i>Phone:+91 9820058279
                </p>

                <p>
                  <i class="bi bi-envelope-open margin-10"></i>Email:
                  info@propiuss.com
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Package;
