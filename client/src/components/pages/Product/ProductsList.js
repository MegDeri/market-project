import React from 'react';
import { PropTypes } from 'prop-types';
import  { Product } from './Product';
import './Product.scss';

export default class ProductsList extends React.Component {
  
  render() {
    const { products } = this.props;
    console.log(this.props.cart)
    return (
      <div>
        <section className="product-list">
          {products.map(product => <Product key={product.id} {...product} /> )}
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
  