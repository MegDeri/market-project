import { connect } from 'react-redux';
import { cartSelector, addItemToCart } from '../../../redux/postsRedux';
import Cart from './Cart';
import ProductList from '../../pages/Product/ProductsList'

const mapStateToProps = state => ({
 products: cartSelector(state),
})


const ProductListContainer = ({ addItemToCart }) => {
  return <ProductList AddFun={addItemToCart} />;
};

ProductListContainer.propTypes = {
  addItemToCart: PropTypes.func.isRequired
};


const mapDispatchToProps = {
  addItemToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);