import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToCartAction} from '../../../redux/cart.actions';

import  { Product } from './Product';
import  CartPage from '../../features/Cart/CartContainer'
import './Product.scss';

class ProductsList extends React.Component {
  
  handleAddClick = (item) => {
    this.props.addToCartAction(item);
  };
  
  render() {
    const { products, addToCartAction, cart } = this.props;
    console.log(this.props.cart)
    return (
      <div>
        <CartPage cart={cart} />
        <section className="product-list">
          {products.map(product => <Product key={product.id} {...product}  addToCartAction={addToCartAction} addFun={this.handleAddClick.bind(this)}/>)}
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
        price: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
      })
    ),
  };
  
  

  const mapStateToProps = ({cart}) => {
    return {
      cart
    }
  }

  const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
      addToCartAction
    }, dispatch)

  }
  
  
  export default connect(mapStateToProps, mapActionsToProps)(ProductsList);
