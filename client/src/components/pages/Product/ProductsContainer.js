import { connect } from 'react-redux';
import { getProducts, loadProductsRequest, getRequest } from '../../../redux/postsRedux';
import  { Products } from './Products';

const mapStateToProps = state => ({
  products: getProducts(state),
  request: getRequest(state),
})

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProductsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);