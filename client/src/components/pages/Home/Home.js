import React from "react";
import { Row, Col } from "reactstrap";
import Products from "../Product/ProductsContainer";
import SideBarContainer from "../../features/SideBar/SideBarContainer";
import "./Home.scss";

export class Home extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Row>
          <Col xs={3} md={2} lg={3}>
            <SideBarContainer />
          </Col>
          <Col xs={9} md={10} lg={9}>
            <Products />
          </Col>
        </Row>
      </div>
    );
  }
}
