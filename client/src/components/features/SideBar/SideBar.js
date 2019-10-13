import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'reactstrap';

export class SideBar extends React.Component  {
    render() {
        return (
        <Container>
          <h3>Sort by:</h3>
          <Row>
              <Col>
                <Button> Name A to Z </Button> 
              </Col>
          </Row>
          <Row>
              <Col>
                <Button> Name Z to A </Button> 
              </Col>
          </Row>
          <Row>
              <Col>
                <Button> Prices from lowest </Button> 
              </Col>
          </Row>
          <Row>
              <Col>
                <Button> Prices form highest </Button> 
              </Col>
          </Row>
        </Container>
        )
    }
}