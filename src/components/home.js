import React from "react";
import {
  Container,
  Nav,
  Row,
  Col,
  Image,
  Card,
  Jumbotron,
  Tab,
  Carousel,
} from "react-bootstrap";
import { motion } from "framer-motion";
import { Chatbot } from "react-chatbot-kit";
import "../css/home.css";
import mapIcon from "../images/number-one.png";
import userExperienceIco from "../images/tablet.png";
import webDevIco from "../images/house.png";
import support from "../images/support.png";
import serviceIco from "../images/settings.png";
import ChatBotIco from "../images/chatbot.png";
import banner4 from "../images/banner-iot-004.jpg";
import banner5 from "../images/banner-1.png";
import banner6 from "../images/banner-iot-006.jpeg";
import home1 from "../images/home1.jpeg";
import mike from "../images/podcast.png";
import phone from "../images/smartphone.png";
import check from "../images/check.png";
import cursor from "../images/cursor.png";
import installation from "../images/installation.png";
import puzzle from "../images/puzzle.png";

import config from "../chatBot/config";
import MessageParser from "../chatBot/MessageParser";
import ActionProvider from "../chatBot/ActionProvider";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showChatBot: false,
    };
  }
  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <Image className="d-block w-100" src={banner5} fluid />
          </Carousel.Item>

          {/* <Carousel.Item>
            <Image className="d-block w-100" src={banner6} fluid />
          </Carousel.Item> */}
          <Carousel.Item>
            <Image className="d-block w-100" src={banner4} fluid />
          </Carousel.Item>
        </Carousel>
        <Container>
          <div className="slogna-text"></div>
          <Row>
            <Col md={6}>
              <Image
                src={home1}
                thumbnail
                fluid
                style={{ width: "100%", height: "auto" }}
              />
            </Col>
            <Col md={6}>
              <h3 className="live-in-future-header">Live in the Future</h3>
              <hr />
              <Row style={{ marginTop: "20px" }}>
                <Col md={1}>
                  <Image
                    className="homepage-feature-ico d-block"
                    src={phone}
                    fluid
                    style={{ width: "100%", height: "auto" }}
                  />
                </Col>
                <Col md={10}>
                  <h5 className="text-center">
                    Control Everything at Your Fingertips
                  </h5>
                  <p className="text-center">
                    Turn on your lights, play your favourite music or change
                    your room temperature, at the tap of your smartphone.
                  </p>
                </Col>
              </Row>
              <Row style={{ marginTop: "20px" }}>
                <Col md={1}>
                  <Image
                    className="homepage-feature-ico d-block"
                    src={serviceIco}
                    fluid
                    style={{ width: "100%", height: "auto" }}
                  />
                </Col>
                <Col md={10}>
                  <h5 className="text-center">Run Personalized Schedules</h5>
                  <p className="text-center">
                    Have your coffee ready when you wake up. Automatically turn
                    everything off when you leave for work. Experience true
                  </p>
                </Col>
              </Row>
              <Row style={{ marginTop: "20px" }}>
                <Col md={1}>
                  <Image
                    className="homepage-feature-ico d-block"
                    src={mike}
                    fluid
                    style={{ width: "100%", height: "auto" }}
                  />
                </Col>
                <Col md={10}>
                  <h5 className="text-center">
                    Talk to Your Home or Make it Talk.
                  </h5>
                  <p className="text-center">
                    Simply talk to your virtual voice assistant, and ask it to
                    do anything for you– be it ordering groceries to solving a
                    math problem.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="margin-top-30">
            <div className="text-center">
              {/*
              <div className="padding-4-rem">
                 <Image
                  className="location-ico bounce-1"
                  src={infoIco}
                  width="20%"
                /> 
              </div>*/}

              {/* {this.state.showChatBot && (
                <div className="chat-bot-container">
                  <Chatbot
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                  />
                </div>
              )} */}
              <div className="margin-20">
                <Row>
                  <Col md={3}>
                    <Card style={{ width: "18rem", margin: "auto" }}>
                      <Card.Body>
                        <div className="padding-4-rem">
                          <motion.div
                            whileHover={{
                              scale: 1.2,
                              transition: { duration: 1 },
                            }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Image
                              className=""
                              src={mapIcon}
                              width="100%"
                              fluid
                            />
                          </motion.div>
                        </div>
                        <hr />
                        <Card.Title>Renowned Brands</Card.Title>
                        <p>
                          We handpick devices from some of the best home
                          automation brands in the world.
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={3}>
                    <Card style={{ width: "18rem", margin: "auto" }}>
                      <Card.Body>
                        <div className="padding-4-rem">
                          <motion.div
                            whileHover={{
                              scale: 1.2,
                              transition: { duration: 1 },
                            }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Image src={userExperienceIco} width="100%" fluid />
                          </motion.div>
                        </div>
                        <hr />
                        <Card.Title>Wireless Configuration</Card.Title>
                        <p>
                          Our entire system is completely wireless, so no added
                          cost of internal wiring.
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={3}>
                    <Card style={{ width: "18rem", margin: "auto" }}>
                      <Card.Body>
                        <div className="padding-4-rem">
                          <motion.div
                            whileHover={{
                              scale: 1.2,
                              transition: { duration: 1 },
                            }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Image src={webDevIco} width="100%" fluid />
                          </motion.div>
                        </div>
                        <hr />
                        <Card.Title>Personalized Setup</Card.Title>
                        <p>
                          We help you find that sweet-spot, between what you
                          need and what automation can offer.
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={3}>
                    <Card style={{ width: "18rem", margin: "auto" }}>
                      <Card.Body>
                        <div className="padding-4-rem">
                          <motion.div
                            whileHover={{
                              scale: 1.2,
                              transition: { duration: 1 },
                            }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Image src={support} width="100%" fluid />
                          </motion.div>
                        </div>
                        <hr />
                        <Card.Title>Online Support</Card.Title>
                        <p>
                          We’ll be with you, through out your smart home
                          journey, available via chat or email.
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </Row>

          <div className="text-center">
            <h3 className="margin-top-30">How it Works</h3>
            <div className="margin-60 service-border">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className="padding-20-px">
                  <Col sm={4}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">STEP 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">STEP 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">STEP 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={8}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Container className="grey-left-border">
                          <Image src={cursor} width="10%" />

                          <h5>Step 1: Pick a Home Automation Theme</h5>
                          <br />
                          <p>
                            <i>
                              Explore the concepts and use-cases to find a theme
                              that’s interesting to you.
                            </i>
                          </p>
                        </Container>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Container className="grey-left-border">
                          <Image src={check} width="10%" />
                          <h5>Step 2: Buy Premium Smart Home Products</h5>
                          <br />
                          <p>
                            <i>
                              Based on the automation theme, you can pick smart
                              home devices from some of the most premium brands
                              in the world.
                            </i>
                          </p>
                        </Container>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Container className="grey-left-border">
                          <Image src={installation} width="10%" />

                          <h5>
                            Step 3: Schedule Installation at Your Convenience
                          </h5>
                          <br />
                          <p>
                            <i>
                              We ship the smart home products to you and/or
                              schedule a professional installation.
                            </i>
                          </p>
                        </Container>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </div>
        </Container>

        <Container>
          <Jumbotron>
            <div className="text-center">
              <div className="padding-4-rem">
                <Image
                  className="location-ico bounce-1 puzzle-ico"
                  src={puzzle}
                  width="10%"
                />
              </div>
              <h3>We "simplify" the home automation puzzle.</h3>
              <p>
                Given the fact that there are at least a dozen wireless
                protocols and over 50+ home automation brands, it can become a
                little overwhelming to pick the right smart home system for your
                home. That’s why we built a super-personalized, fully-automated
                smart home recommender bot. Just answer a few questions, and we
                would suggest the best automation system for your home.
              </p>
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
                    <i className="bi bi-telephone margin-10"></i>CONTACT
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
            {/* <div className="chat-bot-ico">
              <Image
                className="location-ico bounce-1"
                src={ChatBotIco}
                width="5%"
                onClick={() => {
                  this.setState({ showChatBot: !this.state.showChatBot });
                }}
              />
            </div> */}
          </Container>
        </div>
      </>
    );
  }
}

export default Home;
