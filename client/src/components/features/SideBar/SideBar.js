import React from "react";
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'reactstrap';
import './SideBar.scss'


 const SideBar = ({ sortBy }) =>  {
  const handleOnClick = (e, key, direction) => {
    e.preventDefault();
    sortBy(key, direction);
  };

    return (
      <Container>
        <h3>Sort by:</h3>
        <Row>
            <Col>
              <Button onClick={(e) => handleOnClick(e, 'name', 'asc')}> Name A to Z </Button> 
            </Col>
        </Row>
        <Row>
            <Col>
              <Button onClick={(e) => handleOnClick(e, 'name', 'desc')}> Name Z to A </Button> 
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

SideBar.propTypes = {
  sortBy: PropTypes.func.isRequired
};


export default SideBar;