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
import suitcaseIco from "../images/suitcase.png";
import "../css/home.css";

class Product extends React.Component {
  render() {
    return (
      <>
        <Container>
          <div style={{ margin: "70px 0px" }}></div>
          <Jumbotron>
            <div className="text-center">
              <Image
                className="location-ico bounce-1"
                src={suitcaseIco}
                width="10%"
              />
              <h1>OUR WORK</h1>
              <h5>PORTFOLIO</h5>
              <hr />
              <Row>
                <Col md={4}>
                  <Card border="dark">
                    <Card.Header>PROJECT NAME 1</Card.Header>
                    <Card.Body>
                      <Card.Title>Project Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card border="dark">
                    <Card.Header>PROJECT NAME 2</Card.Header>
                    <Card.Body>
                      <Card.Title>Project Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card border="dark">
                    <Card.Header>PROJECT NAME 3</Card.Header>
                    <Card.Body>
                      <Card.Title>Project Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="margin-10">
                <Col md={4}>
                  <Card border="dark">
                    <Card.Header>PROJECT NAME 3</Card.Header>
                    <Card.Body>
                      <Card.Title>Project Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card border="dark">
                    <Card.Header>PROJECT NAME 4</Card.Header>
                    <Card.Body>
                      <Card.Title>Project Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card border="dark">
                    <Card.Header>PROJECT NAME 5</Card.Header>
                    <Card.Body>
                      <Card.Title>Project Title</Card.Title>
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

export default Product;
