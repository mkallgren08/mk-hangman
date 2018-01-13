import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { Button, Glyphicon, Navbar } from "react-bootstrap";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class TestPage extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Jumbotron>
            <h1>Test Page!!!</h1>
          </Jumbotron>
        </Row>
      </Container>
    );
  }

}

export default TestPage;