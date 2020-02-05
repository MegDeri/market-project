 import React from "react";
 import { Link } from 'react-router-dom';

 import CountingItemsContainer from '../CountingItems/CountingItemsContainer'

 import { Row, Col } from 'reactstrap';

const CartItem = (props) => {
 
    const {products, handleAddItemQuantity } = props;
    return (
      <Row >
        <Col>
        
            <img  className="w2 h2 w3-ns h3-ns br-100" src={`${products.picture.src}`} alt='' />
       
          
          <div className="pl3 flex-auto">
            <span className="f6 db black-70">{products.name}</span>
            <span className="f6 db black-70">{products.price}</span>
          </div>
          </Col>
          <Col xs='3' sm='3' md='2' lg='2' xl='2' className='counting-items-col'>
                <CountingItemsContainer
                  products={products}
                  handleAddItemQuantity={handleAddItemQuantity}
                />
          </Col>
          
      </Row>
    )
  
} 

export default CartItem;
