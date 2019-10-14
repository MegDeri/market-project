import React from "react";
import { PropTypes } from 'prop-types';

import ProductsList from './ProductsList';

export class Products extends React.Component  {

  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }

  render() {
    const { products } = this.props;
      return (
        <div>
          <ProductsList products={products} />
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
