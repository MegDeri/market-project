import { connect } from 'react-redux';
import { cartSelector } from '../../../redux/postsRedux';
import Cart from './Cart';

const mapStateToProps = state => ({
 products: cartSelector(state),
})

export default connect(mapStateToProps)(Cart);