import React from "react";
import { PropTypes } from 'prop-types';

export class Products extends React.Component  {

  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }

  render() {
    const { products } = this.props;
      return (
        <div>
        Products
        <ul>
          {products.map(product => <li key={product.id}>{product.title}</li>)}
        </ul>
      </div>
      )
  }
}

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  loadProducts: PropTypes.func.isRequired,
};
