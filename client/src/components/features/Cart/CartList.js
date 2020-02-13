import React from 'react';

import CartItem from './CartItem';

import Alert from '../../common/Alert/Alert';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import { Container } from 'reactstrap';
import TotalPrice from '../CountingItems/TotalPrice/TotalPrice';

export class Cart extends React.Component  {
  
  handleAddDiscount = () => {
    const { sumItemPrice, addDiscountCode } = this.props;
    addDiscountCode();
    sumItemPrice();
}
    render() {
      const { cart, price, discountStatus } = this.props;

      if(cart.length !== 0) {
        return (
          <Container className="list pl0 mt0 measure center">
            {
              cart.map(item => 
                <CartItem 
                products={item}
                key={item.id} 
                handleRemoveItem={this.handleRemoveItem}
              />)
            }
            <div className="order-total">
              <SmallTitle>Total: €{price}</SmallTitle>
            <TotalPrice
                discountStatus={discountStatus}
                handleAddDiscount={this.handleAddDiscount}
            />
            </div>
          </Container>
        )
      } else {
        return <Alert variant='info'>Your shopping cart is empty!</Alert>
    }
  }
}

export default Cart;