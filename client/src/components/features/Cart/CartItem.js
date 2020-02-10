import React from "react";
import CountingItemsContainer from '../CountingItems/CountingItemsContainer'

import { Row, Col } from 'reactstrap';

const CartItem = (props) => {
 
  const {products, handleAddItemQuantity, handleRemoveItem, handleMinusItemQuantity } = props;
  
  return (
    <Row >
      <Col className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
        <img  className="w2 h2 w3-ns h3-ns br-100" src={`${products.picture.src}`} alt='' />
        <div className="pl3 flex-auto">
          <span className="f6 db black-70">{products.name}</span>
          <span className="f6 db black-70">€{products.price}</span>
        </div>
        <div className="flex items-center lh-copy pa3 ph0-l b--black-10">
          <CountingItemsContainer
              products={products}
              handleAddItemQuantity={handleAddItemQuantity}
              handleMinusItemQuantity={handleMinusItemQuantity}
              handleRemoveItem={handleRemoveItem}
            />
        </div>
      </Col>
    </Row>
    )
} 

export default CartItem;
