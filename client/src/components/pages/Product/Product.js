import React from "react";
import { PropTypes } from 'prop-types';
import { Col, Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';

import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox'
import './Product.scss';

export class Product  extends React.Component  {
  render() {
    const { id, name, price, picture } = this.props;
      
    return (
      
        <Col className="product-summary" xs={6}>
          <Card>
            <CardBody>
              <CardTitle>{name}</CardTitle>
              <CardText>{price}</CardText>
            </CardBody>
            <CardImg src={picture.src} alt="pic" className="product-img"/>
            <Button variant="primary">
              Add to cart
            </Button>
          </Card>
        </Col>
      ) 
  }
  
}

Product.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  picture: PropTypes.object,
  price: PropTypes.string,
};