import { connect } from 'react-redux';
import { loadSingleProductRequest, cartSelector} from '../../../redux/postsRedux';
import Cart from './Cart';

const mapStateToProps = state => ({
  products: cartSelector(state),

})

const mapDispatchToProps = dispatch => ({
  loadProducts: (id) => dispatch(loadSingleProductRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);