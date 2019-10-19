import React from "react";
import { PropTypes } from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'reactstrap';

import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox'
import './Product.scss';
import pic from '../../../picture/man1.jpeg'

export class Product  extends React.Component  {
  render() {
    const { id, name, price, picture } = this.props;
      
    return (
      
        <Col className="product-summary" xs={6}>
          
          <SmallTitle>{name}</SmallTitle>
          <img src={picture.src} alt="pic" className="product-img"/>
          <HtmlBox>{price}</HtmlBox>
          <Button variant="primary">
            Add to cart
          </Button>
          
          <img src={pic} width="100px" height="100px"/>
        </Col>
      ) //powyzsza linia kodu w wierszu 27 bedzie docelowo usunieta, to tylko proba czy wyswietlanie zdjec dziala w komponencie
  }
  
}

Product.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  picture: PropTypes.object,
  price: PropTypes.string,
};