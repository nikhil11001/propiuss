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
import mapIcon from "../images/placeholder.png";

class Contact extends React.Component {
  render() {
    return (
      <>
        <Container>
          <div style={{ margin: "70px 0px" }}></div>
          {/* <h1>Contact</h1> */}
          <Row>
            <Col md={6}>
              <h3 className="margin-top-10">CONTACT DETAILS</h3>
              <p>
                <i className="bi bi-globe2 margin-10" />
                <span>
                  Factory - 53/1, Nigdi - Chakan Road, Near Talwade Circle
                </span>
                <p className="margin-10">
                  Talwade, Tal. Haveli, Dist. Pune, Maharashtra, India - 411062
                </p>
              </p>
              <p>
                <i className="bi bi-telephone margin-10" />
                +91 9921001880
              </p>
              <p>
                <i class="bi bi-envelope-open margin-10"></i>
                myinfo@gmail.com
              </p>
            </Col>
            <Col md={6}>
              <h3 className="margin-top-10">GET IN TOUCH</h3>
              <div>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Mobile No</Form.Label>
                    <Form.Control type="number" placeholder="Enter Mobile No" />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="text" placeholder="Enter Message" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="margin-top-30">
          <Jumbotron>
            <h1 className="text-center">
              FIND US HERE ...
              <Image
                className="location-ico bounce-1"
                src={mapIcon}
                width="6%"
              />
            </h1>

            <div style={{ margin: "20px 0" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121058.92836565562!2d73.7929269405248!3d18.52476632650221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1615096060797!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Jumbotron>
        </div>
      </>
    );
  }
}

export default Contact;
