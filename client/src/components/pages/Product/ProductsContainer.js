import { connect } from 'react-redux';
import { getProducts, loadProductsRequest } from '../../../redux/postsRedux';
import  { Products } from './Products';

const mapStateToProps = state => ({
  products: getProducts(state),
})

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProductsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);