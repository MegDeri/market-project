import React from "react";
import { PropTypes } from 'prop-types';
import ProductsList from './ProductsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination';

export class Products extends React.Component  {

  componentDidMount() {
    const { loadProductsByPage } = this.props;
    loadProductsByPage(1);
  }

  loadProductsPage = (page) => {
    const { loadProductsByPage } = this.props;
    loadProductsByPage(page);
  }

  render() {
    const { products, request, pages } = this.props;
    const { loadProductsPage } = this;
    
    const textin =  request.pending ? <Spinner /> 
          : ((request.success && products.length > 0) ? 
          (<div>
          <ProductsList products={products} /> 
          <Pagination pages={pages} onPageChange={loadProductsPage} />
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

Products.defaultProps = {
  initialPage: 1,
  productsPerPage: 6,
  pagination: true
};