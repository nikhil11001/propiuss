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
                <Card.Header>
                  <h3>Smart Autoware</h3>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    Smart Autoware provides you with a completely customized
                    home automation experience. Our motto is to make automation
                    a part of your daily life. We operate on the simple thought
                    of providing end to end solution in automation. Every
                    service we provide is based on values such as transparency,
                    commitment and excellence. We work toward contributing
                    happiness and value to people’s life through automation.
                    Many think that automation is a luxury and is not affordable
                    to all. But we believe that it can be a combination of
                    luxury and convenience. We make automation affordable and
                    provide customized solutions. Smart Autoware brings to you
                    the latest in IoT technology and enables you to control all
                    your home appliances through an app. Smart Autoware gives
                    you the convenience of controlling your lights, fans, TVs,
                    ACs and a lot of other appliances at your fingertips from
                    anywhere in the world. Smart Autoware is a one-stop secure,
                    safe and affordable solution to make your life hassle free.
                    With a range of easy to install products and the ability to
                    create customizable scenarios, Smart Autoware is your answer
                    for all your home automation requirements. All you need is a
                    smartphone, a wifi connection and our best in-class products
                    to simplify the mundane tasks of managing your home.
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
