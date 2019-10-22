import React from "react";
import { Container, Row, Col } from 'reactstrap';
import  Products  from "../Product/ProductsContainer";
import SideBarContainer from '../../features/SideBar/SideBarContainer'
//import { setSortOptions } from '../../../redux/postsRedux.js';


export class Home extends React.Component  {
  render() {
      return (
        <Container>
          <Row>
            <Col xs={3}>
                <SideBarContainer />
            </Col>
            <Col xs={9}>
                <Products />
            </Col>
          </Row>
        </Container>
      )
  }
}



