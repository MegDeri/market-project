import { connect } from 'react-redux';
import { getCart } from '../../../redux/postsRedux';
import NavBar from './NavBar';

const mapStateToProps = state => ({
    cart: getCart(state),
});

export default connect(mapStateToProps, null)(NavBar);