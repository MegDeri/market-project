import React from "react";
import { Container, Row, Col } from 'reactstrap';
import  Products  from "../Product/ProductsContainer";
import SideBarContainer from '../../features/SideBar/SideBarContainer'

export class Home extends React.Component  {
  render() {
      return (
        <Container>
          <Row>
            <Col xs={3} md={2}>
                <SideBarContainer />
            </Col>
            <Col xs={9} md={10}>
                <Products />
            </Col>
          </Row>
        </Container>
      )
  }
}



