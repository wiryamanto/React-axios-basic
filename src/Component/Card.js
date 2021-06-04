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
                    src="https://www.logolynx.com/images/logolynx/1a/1a8eb0c4e61a333a3228e2a87a73aa6f.jpeg"
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
