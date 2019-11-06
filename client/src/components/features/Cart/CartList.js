import React from 'react';
import CartItem from './CartItem';

export default class Cart extends React.Component  {

    render() {
       
      const { cart } = this.props;
      console.log(cart)
      
        return (
            <ul className="list pl0 mt0 measure center">
                {
                  cart.map(c => <CartItem key={c.id} {...c} />)
                }
            </ul>
        )
    }
}
