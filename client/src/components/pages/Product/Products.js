import React from "react";
import { PropTypes } from 'prop-types';
import ProductsList from './ProductsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination';

export class Products extends React.Component  {

  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }

  render() {
    const { products, request } = this.props;
    
    const textin =  request.pending ? <Spinner /> 
          : ((request.success && products.length > 0) ? 
          (<div>
          <ProductsList products={products} /> 
          <Pagination pages={6} onPageChange={(page) => { console.log(page) }} />
          </div>)
           :
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
      name: PropTypes.string.isRequired,
      brand:PropTypes.string.isRequired,
      model:PropTypes.string.isRequired,
      picture: PropTypes.object.isRequired,
      price: PropTypes.string.isRequired,
    })
  ),
  loadProducts: PropTypes.func.isRequired,
};
