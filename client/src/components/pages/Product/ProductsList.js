import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import  { Product } from './Product';
import  Cart  from '../../features/Cart/CartList'
import './Product.scss';

class ProductsList extends React.Component {
  

  findProductIndex = (cart, itemID) => {
    return cart.findIndex(p => p.id === itemID);
  };

  updateProductAmount(cart, item) {
    const existingProductIndex = this.findProductIndex(cart, item.id)
    
    const updatedProducts = [...cart];
    const existingProduct = updatedProducts[existingProductIndex];
      
    const updatedAmountProduct = {
      ...existingProduct, 
      amount: existingProduct.amount + item.amount,
    };

    updatedProducts[existingProductIndex] = updatedAmountProduct;
    
      return updatedProducts;    
  }
  
  handleAddClick (item) {
    const {cart} = this.state;
    const existingProductIndex = this.findProductIndex(cart, item.id)
   
    this.setState({
      cart: existingProductIndex >= 0
        ? this.updateProductAmount(cart, item)
        : [...cart, item ]
    });
  }
  
  render() {

    const { products } = this.props;
    console.log(this.props.cart)
    return (
      <div>
        <Cart cart={this.props.cart} />
        {/* <ul>{this.state.cart.map(c => <li key={c.id}>{c.name} | amount {c.amount}</li>)}</ul> */}
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
  };
  

  const mapStateToProp = ({cart}) => {
    return {
      cart
    }
  }
  
  
  export default connect(mapStateToProp)(ProductsList);
