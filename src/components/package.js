import React from "react";
import { Container, Row, Col, Image, Card, Jumbotron } from "react-bootstrap";
import packageIco from "../images/package.png";
import home from "../images/home-automation.png";
import building from "../images/smart-city.png";
import office from "../images/office.png";
import hotel from "../images/hotel.png";
import hospital from "../images/hospital-bed.png";
import industrial from "../images/industrial.png";

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
              <Row className="margin-top-10">
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
      </>
    );
  }
}

export default Package;
