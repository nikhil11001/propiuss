import React from "react";
import { Container, Row, Col, Image, Card, Jumbotron } from "react-bootstrap";
import "../css/home.css";
import aboutUsIcon from "../images/aboutUs.png";

class About extends React.Component {
  render() {
    return (
      <>
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
      </>
    );
  }
}

export default About;
