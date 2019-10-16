import React from "react";
import { PropTypes } from 'prop-types';
import ProductsList from './ProductsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

export class Products extends React.Component  {

  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }

  render() {
    const { products, request } = this.props;
    
    const textin =  request.pending ? <Spinner /> : ((request.success && products.length > 0) ? 
          <ProductsList products={products} />  :
           <Alert variant="error"> {request.error} </Alert> || <Alert variant="info"> No posts!!! </Alert>) 
    
      return (
        <div>
           {textin}
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
