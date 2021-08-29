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
import "../css/home.css";
import aboutUsIcon from "../images/aboutUs.png";

class About extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="light" variant="light" fixed="top">
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
        <Container>
          <div className="about-us">
            <Image
              src={aboutUsIcon}
              className="location-ico bounce-1"
              width="10%"
            />
            <h3>
              We build what is essential for business, powered by our innovative
              platforms and services. We are a fun, talented team with a passion
              for building remarkable software that people love to use. We are
              proud to be able to contribute to our clients’ successes, enhance
              the digital ecosystem, and improve the lives of our staff and
              their families.
            </h3>
          </div>
          <div className="margin-top-30">
            <Jumbotron>
              <Card>
                <Card.Header>Lorem Ipsum</Card.Header>
                <Card.Body>
                  <Card.Title>What is Lorem Ipsum?</Card.Title>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Jumbotron>
          </div>
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
          </Container>
        </div>
      </>
    );
  }
}

export default About;
