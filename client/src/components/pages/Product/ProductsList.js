import React from 'react';
import { PropTypes } from 'prop-types';

import  { Product } from './Product';
import './Product.scss';

const ProductsList= ({ products }) => (
    <div>
      <section className="product-list">
        {products.map(product => <Product key={product.id} {...product} />)}
      </section>
    </div>
  );
  
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
  
  export default ProductsList;