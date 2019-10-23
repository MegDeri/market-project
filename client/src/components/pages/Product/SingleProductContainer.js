import { connect } from 'react-redux';
import { getRequest, loadSingleProductRequest, getSingleProduct} from '../../../redux/postsRedux';
import SingleProduct from './SingleProduct';

const mapStateToProps = state => ({
  products: getSingleProduct(state),
  request: getRequest(state),
})

const mapDispatchToProps = dispatch => ({
  loadProducts: (id) => dispatch(loadSingleProductRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);