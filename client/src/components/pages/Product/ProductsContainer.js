import { connect } from 'react-redux';
import {  getProductsSort, loadProductsByPageRequest, getRequest, getPages } from '../../../redux/postsRedux';
import  { Products } from './Products';

const mapStateToProps = state => ({
  request: getRequest(state),
  pages: getPages(state),
  products: getProductsSort(state),
})

const mapDispatchToProps = dispatch => ({
  loadProductsByPage: (page) => dispatch(loadProductsByPageRequest(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);