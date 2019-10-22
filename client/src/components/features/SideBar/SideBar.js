import React from "react";
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'reactstrap';
import './SideBar.scss'


 const SideBar = ({ setSortOptions }) =>  {
  const handleOnClick = (key, direction) => {
    setSortOptions({key, direction});
  };

    return (
      <Container>
        <h3>Sort by:</h3>
        <Row>
            <Col>
              <Button onClick={() => handleOnClick('name', 'asc')}> Name A to Z </Button> 
            </Col>
        </Row>
        <Row>
            <Col>
              <Button onClick={() => handleOnClick('name', 'desc')}> Name Z to A </Button> 
            </Col>
        </Row>
        <Row>
            <Col>
              <Button onClick={() => handleOnClick('price', 'asc')}> Prices from lowest </Button> 
            </Col>
        </Row>
        <Row>
            <Col>
              <Button onClick={() => handleOnClick('price', 'desc')}> Prices form highest </Button> 
            </Col>
        </Row>
      </Container>
    )

}

SideBar.propTypes = {
  setSortOptions: PropTypes.func.isRequired
};


export default SideBar;