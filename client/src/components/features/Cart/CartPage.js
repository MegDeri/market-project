import React from 'react';
import Cart from './CartList';

class CartPage extends React.Component {
render() {
  const { cart } = this.props;
    return(
      <div>
        <Cart cart={cart}/>
      </div>
    );
  }
} 

export default CartPage;