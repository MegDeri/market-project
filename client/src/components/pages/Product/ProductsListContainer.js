import { connect } from 'react-redux';
import { cartSelector, addItemToCart } from '../../../redux/postsRedux';
import  { ProductsList } from './ProductsList';

const mapStateToProps = state => ({
  products: cartSelector(state),
})

const ProductListContainer = ({ addItemToCart }) => {
    return <ProductList addItemToCart={addItemToCart} />;
  };
  
  ProductListContainer.propTypes = {
    addItemToCart: PropTypes.func.isRequired
  };
  
  
  const mapDispatchToProps = {
    addItemToCart
  };

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);