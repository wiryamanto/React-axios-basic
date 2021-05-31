import React, { Component } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

export default class Cardd extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    axios.get("https://appsfilm.herokuapp.com/api/film").then((res) => {
      // console.log(res.data.data);
      this.setState({
        films: res.data.data,
      });
    });
  }

  render() {
    const { films } = this.state;
    return (
      <Container className="mt-5">
        <Row>
          {films.map((film, index) => {
            return (
              <Col className="mt-3" key={index}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://asset.kompas.com/crops/AnzPGqRxpoD-26G__5fPh6ooZSk=/0x28:640x455/750x500/data/photo/2020/12/12/5fd44cf8e94b1.jpg"
                  />
                  <Card.Body>
                    <Card.Title>{film.judul}</Card.Title>
                    <Card.Text>
                      {film.genre}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
