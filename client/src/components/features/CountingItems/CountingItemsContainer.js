import { connect } from 'react-redux';
import { getCart,  addItemQuantity} from '../../../redux/postsRedux';
import CountingItems from './CountingItems';

const mapStateToProps = state => ({
  cart: getCart(state),
})

const mapDispatchToProps = dispatch => ({
  addItemQuantity: (id) => dispatch(addItemQuantity(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CountingItems);