import React from "react";
import { PropTypes } from 'prop-types';
import ProductsList from './ProductsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination';

export class Products extends React.Component  {

  componentDidMount() {
    const { loadProductsByPage, initialPage, productsPerPage } = this.props;
    loadProductsByPage(initialPage, productsPerPage );
  }

  loadProductsPage = (page) => {
    const { loadProductsByPage, productsPerPage } = this.props;
    loadProductsByPage(page, productsPerPage);
  }

  render() {
    const { products, request, pages, presentPage } = this.props;
    const { loadProductsPage } = this;
    
    const textin =  request.pending ? <Spinner /> 
          : ((request.success && products.length > 0) ? 
          (<div>
          <ProductsList products={products} /> 
          <Pagination pages={pages} onPageChange={loadProductsPage} initialPage={presentPage} />
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
      price: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  loadProductsByPage: PropTypes.func.isRequired,
};

Products.defaultProps = {
  initialPage: 1,
  productsPerPage: 6,
  pagination: true
};