import { connect } from 'react-redux';
import { getCart, addItemQuantity } from '../../../redux/postsRedux';
import Cart from './CartList';

const mapStateToProps = state => ({
    cart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
    addItemQuantity: (id) => dispatch(addItemQuantity(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);