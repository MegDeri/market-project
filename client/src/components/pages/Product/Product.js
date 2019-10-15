import React from "react";
import { PropTypes } from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox'
import './Product.scss';

export class Product  extends React.Component  {
  render() {
    const { id, title, content } = this.props;
      
    return (
        <Col className="product-summary" xs={6}>
          
          <SmallTitle>{title}</SmallTitle>
          <HtmlBox>{content}</HtmlBox>
          <Button variant="primary">
            Add to cart
          </Button>
        
        </Col>
      )
  }
}

Product.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};