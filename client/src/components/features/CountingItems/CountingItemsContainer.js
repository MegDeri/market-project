import { connect } from 'react-redux';
import { getCart,  addItemQuantity, removeItem, minusItemQuantity } from '../../../redux/postsRedux';
import CountingItems from './CountingItems';

const mapStateToProps = state => ({
  cart: getCart(state), 
})

const mapDispatchToProps = dispatch => ({
  addItemQuantity: (id) => dispatch(addItemQuantity(id)),
  minusItemQuantity: (id) => dispatch(minusItemQuantity(id)),
  removeItem: (payload) => dispatch(removeItem(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountingItems);