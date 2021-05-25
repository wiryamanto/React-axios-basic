import React, { Component } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

export default class Cardd extends Component {
  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col className="mt-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://asset.kompas.com/crops/AnzPGqRxpoD-26G__5fPh6ooZSk=/0x28:640x455/750x500/data/photo/2020/12/12/5fd44cf8e94b1.jpg"
              />
              <Card.Body>
                <Card.Title>Burger</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mt-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://asset.kompas.com/crops/AnzPGqRxpoD-26G__5fPh6ooZSk=/0x28:640x455/750x500/data/photo/2020/12/12/5fd44cf8e94b1.jpg"
              />
              <Card.Body>
                <Card.Title>Burger</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mt-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://asset.kompas.com/crops/AnzPGqRxpoD-26G__5fPh6ooZSk=/0x28:640x455/750x500/data/photo/2020/12/12/5fd44cf8e94b1.jpg"
              />
              <Card.Body>
                <Card.Title>Burger</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mt-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://asset.kompas.com/crops/AnzPGqRxpoD-26G__5fPh6ooZSk=/0x28:640x455/750x500/data/photo/2020/12/12/5fd44cf8e94b1.jpg"
              />
              <Card.Body>
                <Card.Title>Burger</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
