import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import  Products  from "../Product/ProductsContainer";
import  { SideBar } from '../../features/SideBar/SideBar'

export class Home extends React.Component  {
  render() {
      return (
        <Container>
          <Row>
            <Col xs={3}>
                <SideBar />
            </Col>
            <Col xs={9}>
                <Products />
            </Col>
          </Row>
        </Container>
      )
  }
}


