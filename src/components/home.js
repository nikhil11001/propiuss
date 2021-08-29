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
  Tab,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Chatbot } from "react-chatbot-kit";
import "../css/home.css";
import mapIcon from "../images/number-one.png";
import userExperienceIco from "../images/tablet.png";
import webDevIco from "../images/house.png";
import support from "../images/support.png";
import infoIco from "../images/information.png";
import serviceIco from "../images/settings.png";
import deliveryIco from "../images/delivery-truck.png";
import supplyIco from "../images/supply-chain.png";
import programmingIco from "../images/programming.png";
import androidIco from "../images/android.png";
import JSIco from "../images/js-format.png";
import sqlIco from "../images/mysql.png";
import phpIco from "../images/php.png";
import rubyIco from "../images/ruby.png";
import javaIco from "../images/java.png";
import reactIco from "../images/atom.png";
import htmlIco from "../images/html-5.png";
import ChatBotIco from "../images/chatbot.png";
import banner1 from "../images/banner-iot-001.jpeg";
import banner2 from "../images/banner-iot-002.jpeg";
import banner3 from "../images/banner-iot-003.jpeg";
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
        {/* <Navbar collapseOnSelect bg="light" variant="light" fixed="top" expand="sm"> */}
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
          fixed="top"
        >
          <Container>
            <Navbar.Brand>PROPIUSS</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/home">HOME</Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/package">PACKAGE</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about">ABOUT US</Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/contact">CONTACT</Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={banner5} />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={banner6} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner4} />
          </Carousel.Item>
        </Carousel>
        <Container>
          <div className="slogna-text"></div>
          <Row>
            <Col md={6}>
              <Image src={home1} height="20%" thumbnail />
            </Col>
            <Col md={6}>
              <h3>Live in the Future</h3>
              <hr />
              <Row style={{ marginTop: "20px" }}>
                <Col md={1}>
                  <img className="d-block w-100" src={phone} />
                </Col>
                <Col md={10}>
                  <h5>Control Everything at Your Fingertips</h5>
                  <p>
                    Turn on your lights, play your favourite music or change
                    your room temperature, at the tap of your smartphone.
                  </p>
                </Col>
              </Row>
              <Row style={{ marginTop: "20px" }}>
                <Col md={1}>
                  <img className="d-block" src={serviceIco} width="100%" />
                </Col>
                <Col md={10}>
                  <h5>Run Personalized Schedules</h5>
                  <p>
                    Have your coffee ready when you wake up. Automatically turn
                    everything off when you leave for work. Experience true
                  </p>
                </Col>
              </Row>
              <Row style={{ marginTop: "20px" }}>
                <Col md={1}>
                  <img className="d-block" width="100%" src={mike} />
                </Col>
                <Col md={10}>
                  <h5>Talk to Your Home or Make it Talk.</h5>
                  <p>
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
              <div className="padding-4-rem">
                {/* <Image
                  className="location-ico bounce-1"
                  src={infoIco}
                  width="20%"
                /> */}
              </div>
              {this.state.showChatBot && (
                <div className="chat-bot-container">
                  <Chatbot
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                  />
                </div>
              )}

              <div className="margin-20">
                <Row>
                  <Col md={3}>
                    <Card style={{ width: "18rem" }}>
                      <Card.Body>
                        <div className="padding-4-rem">
                          <motion.div
                            whileHover={{
                              scale: 1.2,
                              transition: { duration: 1 },
                            }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Image className="" src={mapIcon} width="100%" />
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
                    <Card style={{ width: "18rem" }}>
                      <Card.Body>
                        <div className="padding-4-rem">
                          <motion.div
                            whileHover={{
                              scale: 1.2,
                              transition: { duration: 1 },
                            }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Image src={userExperienceIco} width="100%" />
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
                    <Card style={{ width: "18rem" }}>
                      <Card.Body>
                        <div className="padding-4-rem">
                          <motion.div
                            whileHover={{
                              scale: 1.2,
                              transition: { duration: 1 },
                            }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Image src={webDevIco} width="100%" />
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
                    <Card style={{ width: "18rem" }}>
                      <Card.Body>
                        <div className="padding-4-rem">
                          <motion.div
                            whileHover={{
                              scale: 1.2,
                              transition: { duration: 1 },
                            }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Image src={support} width="100%" />
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
          {/* <div className="margin-top-30">
            <Jumbotron>
              <p>
                <i>
                  We engage in all stages of product development, right from
                  design to implementation and support. We deliver quality
                  software using multiple models and are flexible to implement
                  other models as per the requirements of the solution or the
                  client.
                </i>
              </p>
            </Jumbotron>
          </div> */}
        </Container>

        {/* <div className="text-center">
          <div className="padding-4-rem">
            <Image
              className="location-ico bounce-1"
              src={programmingIco}
              width="15%"
            />
          </div>
          <h1>TECHNOLOGIES</h1>
          <hr />
          <Container>
            <h3>WE WORK ON</h3>
            <Jumbotron>
              <Row>
                <Col md={4}>
                  <Card>
                    <Card.Body>
                      <Card.Title>React</Card.Title>
                      <Card.Text>
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 90 }}
                          whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: "100%",
                          }}
                        >
                          <Image src={reactIco} width="50%" />
                        </motion.div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Java</Card.Title>
                      <Card.Text>
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          whileTap={{
                            scale: 0.8,
                            rotate: -100,
                            borderRadius: "100%",
                          }}
                        >
                          <Image src={javaIco} width="50%" />
                        </motion.div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Body>
                      <Card.Title>HTML</Card.Title>
                      <Card.Text>
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: "100%",
                          }}
                        >
                          <Image src={htmlIco} width="50%" />
                        </motion.div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Ruby</Card.Title>
                      <Card.Text>
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: "100%",
                          }}
                        >
                          <Image src={rubyIco} width="50%" />
                        </motion.div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Android</Card.Title>
                      <Card.Text>
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: "100%",
                          }}
                        >
                          <Image src={androidIco} width="50%" />
                        </motion.div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Java Script</Card.Title>
                      <Card.Text>
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: "100%",
                          }}
                        >
                          <Image src={JSIco} width="50%" />
                        </motion.div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Jumbotron>
          </Container>
        </div> */}

        <Container>
          <Jumbotron>
            <div className="text-center">
              <div className="padding-4-rem">
                <Image
                  className="location-ico bounce-1"
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
                    <i className="bi bi-person margin-10"></i>ABOUT US{" "}
                  </p>
                  <p>
                    <i className="bi bi-screwdriver margin-10"></i>SERVICES
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
                  info@biscoindia.com
                </p>
              </Col>
            </Row>
            <div className="chat-bot-ico">
              <Image
                className="location-ico bounce-1"
                src={ChatBotIco}
                width="5%"
                onClick={() => {
                  this.setState({ showChatBot: !this.state.showChatBot });
                }}
              />
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Home;
