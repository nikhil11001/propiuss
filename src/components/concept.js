import React from "react";
import { Container, Row, Col, Image, Card, Jumbotron } from "react-bootstrap";
import home from "../images/smart-house.png";
import climate from "../images/climate.png";
import light from "../images/light-bulb.png";
import media from "../images/multimedia.png";
import protect from "../images/protect.png";
import energy from "../images/save-energy.png";
import concept from "../images/concept.png";

import "../css/home.css";

const Concepts = () => {
  return (
    <>
      <Container>
        <div style={{ margin: "70px 0px" }}></div>
        <Jumbotron>
          <div className="text-center">
            <Image
              className="location-ico bounce-1"
              src={concept}
              width="10%"
            />
            <h1>Things To Automate Which Make Your Life Easy !!!</h1>
            <hr />
            <Row>
              <Col md={4}>
                <Card border="dark">
                  <Card.Header>Lights</Card.Header>
                  <Card.Body>
                    <Image src={light} width="20%" />
                    <Card.Text>
                      <b>"Control Your Lights, Your Way."</b>
                      <p>
                        Discover a smarter way to control your lights. Spin the
                        wheel to change colours. Set schedules to turn them
                        on/off.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card border="dark">
                  <Card.Header>Smart Home</Card.Header>
                  <Card.Body>
                    <Image src={home} width="20%" />
                    <Card.Text>
                      <b>"Don't Think Just Ask."</b>
                      <p>
                        Control Your Smart Home devices through Voice Command
                        and ask almost anything and everything.
                      </p>
                      <br />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card border="dark">
                  <Card.Header>Energy Efficiency</Card.Header>
                  <Card.Body>
                    <Image src={energy} width="20%" />
                    <Card.Text>
                      <b>"Discover a Smarter Way to Save Energy."</b>
                      <p>
                        Use the power of technology to intelligently save money.
                        Automatically turn off your air-conditioner, lights etc.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="margin-top-10">
              <Col md={4}>
                <Card border="dark">
                  <Card.Header>Protection</Card.Header>
                  <Card.Body>
                    <Image src={protect} width="20%" />
                    <Card.Text>
                      <b>"Protect Your Loved Ones."</b>
                      <p>
                        Get instant alerts on your smartphone when your home is
                        hit by fire, flood or any other disaster and configure
                        the central automation system to take corrective action
                        instantly.Protection Against Natural Accidents.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card border="dark">
                  <Card.Header>Multimedia</Card.Header>
                  <Card.Body>
                    <Image src={media} width="20%" />
                    <Card.Text>
                      <b>"Turn On Intelligent Living."</b>
                      <p>
                        Home automation takes comfort to the next level,
                        allowing you to control your television, music system,
                        X-Box, air-conditioner or shades wirelessly from a
                        single universal remote. What’s more? You can even
                        create intelligent scenes.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card border="dark">
                  <Card.Header>Climate</Card.Header>
                  <Card.Body>
                    <Image src={climate} width="20%" />
                    <Card.Text>
                      <b>"Experience Ultimate Comfort."</b>
                      <p>
                        Keep track of ambient temperature across corners and
                        automatically send commands to your central cooling unit
                        to facilitate optimum cooling. Intelligently save energy
                        by automatically turning off the devices.
                      </p>
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
                <i class="bi bi-cursor margin-10"></i>Unit No.3, Building No.1,
                Ground Floor, Liliya Nagar, Off S.V.Road, Goregaon (West),
                Mumbai-400 062. India.
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
};

export default Concepts;
