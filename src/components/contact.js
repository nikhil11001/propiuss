import React from "react";
import {
  Button,
  Container,
  Form,
  Row,
  Col,
  Image,
  Jumbotron,
} from "react-bootstrap";
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
                  E504,Ayaan Building No2, Ubalenager, Opp.sai satyam park,
                </span>
                <p className="margin-10">Wagholi, Pune - 412207</p>
              </p>
              <p>
                <i className="bi bi-telephone margin-10" />
                +91 89835 00938
              </p>
              <p>
                <i class="bi bi-envelope-open margin-10"></i>
                info@smartautoware.com
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
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3781.981885851621!2d73.95874956423715!3d18.574855372361206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sE504%2CAyaan%20Building%20No2%2C%20Ubalenager%2C%20Opp.sai%20satyam%20park%2C%20Wagholi%20%2CPune%20412207!5e0!3m2!1sen!2sin!4v1631426328579!5m2!1sen!2sin"
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
              />
            </div>
          </Jumbotron>
        </div>
      </>
    );
  }
}

export default Contact;
