import React from 'react';
import { PropTypes } from 'prop-types';

import  { Product } from './Product';
import './Product.scss';

export class ProductsList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cart: [],
    };
  }

  // findProductIndex = (cart, itemID) => {
  //   return cart.findIndex(p => p.id === itemID);
  // };

  // updateProductAmount(cart, item) {
  //   const existingProductIndex = this.findProductIndex(cart, item.id)
    
  //   const updatedProducts = [...cart];
  //   const existingProduct = updatedProducts[existingProductIndex];
      
  //   const updatedAmountProduct = {
  //     ...existingProduct, 
  //     amount: existingProduct.amount + item.amount,
  //   };

  //   updatedProducts[existingProductIndex] = updatedAmountProduct;
    
  //     return updatedProducts;    
  // }
  
  // handleAddClick (item) {
  //   const {cart} = this.state;
  //   const existingProductIndex = this.findProductIndex(cart, item.id)
   
  //   this.setState({
  //     cart: existingProductIndex >= 0
  //       ? this.updateProductAmount(cart, item)
  //       : [...cart, item ]
  //   });
  // }
  
  handleAddClick (item) {
    const { addItemToCart, cart } = this.props;
    addItemToCart (cart, item);
    }

  render() {
    const { products } = this.props;
    return (
      <div>
        <ul>{this.state.cart.map(c => <li key={c.id}>{c.name} | amount {c.amount}</li>)}</ul>
        <section className="product-list">
          {products.map(product => <Product key={product.id} {...product} addFun={this.handleAddClick.bind(this)}/>)}
        </section>
      </div>
    );
  }
}
  
  ProductsList.propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        picture: PropTypes.object.isRequired,
        price: PropTypes.string.isRequired,
      })
    ),
    addItemToCart: PropTypes.func.isRequired,
  };
  
  export default ProductsList;