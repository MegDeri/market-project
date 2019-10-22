import { connect } from 'react-redux';
import {  getProductsSort, loadProductsRequest, getRequest } from '../../../redux/postsRedux';
import  { Products } from './Products';

const mapStateToProps = state => ({
  request: getRequest(state),
  products: getProductsSort(state),
})

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProductsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);