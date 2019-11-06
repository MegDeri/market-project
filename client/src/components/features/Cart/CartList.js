import React from 'react';
import { PropTypes } from 'prop-types';



const CartItem = ({id, name, price, amount}) =>  (
    <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
        <img className="w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" />
        <div className="pl3 flex-auto">
          <span className="f6 db black-70">{name}</span>
          <span className="f6 db black-70">{price}</span>
        </div>
        <div>
         <span>Amount: {amount}</span>
         <button>+</button>
         <button>-</button>
        </div>
    </li>
  )
  
class Cart extends React.Component  {

    render() {
       
      const {cart} = this.props;
      console.log(cart)
        return (
            <ul className="list pl0 mt0 measure center">
                {cart.map(c => <CartItem {...c} key={c.id}/>)}
                
            </ul>
        )
    }
}

Cart.propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          brand:PropTypes.string.isRequired,
          model:PropTypes.string.isRequired,
          picture: PropTypes.object.isRequired,
          price: PropTypes.string.isRequired,
      })
    ),
  };

export default Cart;