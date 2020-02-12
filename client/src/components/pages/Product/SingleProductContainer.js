import { connect } from 'react-redux';
import { getRequest, 
        loadSingleProductRequest, 
        getSingleProduct, 
        getCart, 
        addItemQuantity, 
        addToCart, 
        sumItemPrice } from '../../../redux/postsRedux';
import SingleProduct from './SingleProduct';

const mapStateToProps = state => ({
  products: getSingleProduct(state),
  request: getRequest(state),
  cart: getCart(state),
})

const mapDispatchToProps = dispatch => ({
  loadProducts: (id) => dispatch(loadSingleProductRequest(id)),
  addToCart: (payload) => dispatch(addToCart(payload)),
  addItemQuantity: (id) => dispatch(addItemQuantity(id)),
  sumItemPrice: () => dispatch(sumItemPrice()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);