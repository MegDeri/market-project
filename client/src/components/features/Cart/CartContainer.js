import { connect } from 'react-redux';
import { getCart, addItemQuantity, minusItemQuantity, removeItem} from '../../../redux/postsRedux';
import Cart from './CartList';

const mapStateToProps = state => ({
    cart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
    addItemQuantity: (id) => dispatch(addItemQuantity(id)),
    minusItemQuantity: (id) => dispatch(minusItemQuantity(id)),
    removeItem: (payload) => dispatch(removeItem(payload)),
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);