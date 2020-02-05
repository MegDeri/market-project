import React from 'react';
import CartItem from './CartItem';


import Alert from '../../common/Alert/Alert';



export class Cart extends React.Component  {

    render() {
       
      const { cart } = this.props;
      
      if(cart.length !== 0) {
        return (
            <div className="list pl0 mt0 measure center">
                {
                  cart.map(item => 
                    <CartItem 
                    products={item}
                    key={item.id} 
                    />)
                }
            </div>
        )
      } else {
        return <Alert variant='info'>Your shopping cart is empty!</Alert>
    }
  }
}

export default Cart;