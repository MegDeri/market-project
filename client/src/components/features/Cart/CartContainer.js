import { connect } from 'react-redux';
import { 
    getCart, 
    addItemQuantity, 
    minusItemQuantity, 
    removeItem, 
    addDiscountCode, 
    sumItemPrice, 
    getDiscountStatus, 
    getTotalPrice, 
    getTotalQuantity,
    sumItemQuantity 
} from '../../../redux/postsRedux';
import Cart from './CartList';

const mapStateToProps = state => ({
    cart: getCart(state),
    price: getTotalPrice(state),
    discountStatus: getDiscountStatus(state),
    quantity: getTotalQuantity(state)
});

const mapDispatchToProps = dispatch => ({
    addItemQuantity: (id) => dispatch(addItemQuantity(id)),
    minusItemQuantity: (id) => dispatch(minusItemQuantity(id)),
    removeItem: (payload) => dispatch(removeItem(payload)),
    addDiscountCode:() => dispatch(addDiscountCode()),
    sumItemPrice:() => dispatch(sumItemPrice()),
    sumItemQuantity: () => dispatch(sumItemQuantity()),
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);