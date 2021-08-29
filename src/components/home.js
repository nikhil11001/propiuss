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
import mapIcon from "../images/layers.png";
import userExperienceIco from "../images/interface.png";
import webDevIco from "../images/web-development.png";
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
            <Navbar.Brand>Edu-Pro</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/home">HOME</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/product">SERVICES</Link>
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
            <img
              className="d-block w-100"
              src="https://previews.123rf.com/images/karpenkoilia/karpenkoilia1705/karpenkoilia170500012/78957944-un-concepto-de-l%C3%ADnea-vectorial-web-para-programaci%C3%B3n-banner-lineal-moderno-.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://thumbs.dreamstime.com/b/programming-web-banner-vector-illustration-tiny-people-character-concept-suitable-landing-page-wallpaper-background-book-168518071.jpg"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.brandchemistry.com.au/hs-fs/hubfs/blog-files/bc-blog-marketing-courses-under-fifty-dollars.png?width=893&name=bc-blog-marketing-courses-under-fifty-dollars.png"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.insidehighered.com/sites/default/server_files/media/Inside%20Digital%20Learning/iStock-872232248.jpg"
            />
          </Carousel.Item>
        </Carousel>
        <Container>
          <div className="slogna-text"></div>

          <Row className="margin-top-30">
            <div className="text-center">
              <div className="padding-4-rem">
                <Image
                  className="location-ico bounce-1"
                  src={infoIco}
                  width="20%"
                />
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
              <h1 className="text-center">WHO ARE WE ?</h1>
              <hr />
              <i>
                We are a team of engineers and designers who have been turning
                visionary applications into reality. We strongly believe that a
                product’s beauty lies not only in its user interface but also in
                its code, performance, and maintainability. We offer solutions
                across the entire development life cycle of software.
              </i>
              <p className="text-center margin-top-10">
                <i class="bi bi-star-fill margin-10"></i>
                <i class="bi bi-star-fil          l margin-10"></i>
                <i class="bi bi-star-fill margin-10"></i>
                <i class="bi bi-star-fill margin-10"></i>
                <i class="bi bi-star-fill margin-10"></i>
              </p>
              <h3>
                <u>WE BUILD</u>
              </h3>
              <div className="margin-20">
                <Row>
                  <Col md={4}>
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
                        <Card.Title>
                          BUILD TRANSFERABLE SOFTWARE PRODUCTS
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
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
                        <Card.Title>INTUITIVE USER EXPERIENCES</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
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
                        <Card.Title>
                          SCALABLE MOBILE & WEB APPLICATIONS
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </Row>

          <div className="text-center">
            <div className="padding-4-rem">
              <Image
                className="location-ico bounce-1"
                src={serviceIco}
                width="15%"
              />
            </div>
            <h1>SERVICES</h1>
            <hr />
            <i>
              We engage in all stages of product development, right from design
              to implementation and support. We deliver quality software using
              multiple models and are flexible to implement other models as per
              the requirements of the solution or the client.
            </i>
            <div className="margin-60 service-border">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className="padding-20-px">
                  <Col sm={4}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          MANAGED SOLUTION DELIVERY
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          DEVELOP TRANSFERABLE SOFTWARE PRODUCTS
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={8}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Container className="grey-left-border">
                          <Image src={deliveryIco} width="10%" />
                          <h3>MANAGED SOLUTION DELIVERY</h3>
                          <h5>OWNING THE ENTIRE SOLUTION</h5>
                          <br />
                          <p>
                            <i>
                              DELIVERY PROCESS Clients who want minimal
                              involvement and timely deliveries prefer this
                              model. We take full ownership of the entire
                              solution and work towards achieving agreed-upon
                              timelines.
                            </i>
                          </p>
                        </Container>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Container className="grey-left-border">
                          <Image src={supplyIco} width="10%" />
                          <h3> DEVELOP TRANSFERABLE SOFTWARE PRODUCTS</h3>
                          <h5>BUILD, OPERATE, AND TRANSFER PRODUCTS</h5>
                          <br />
                          <p>
                            <i>
                              We help build software products for our clients,
                              and transfer the full ownership of the product
                              whenever the client is ready.
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

        <div className="text-center">
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
        </div>

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
