import { connect } from "react-redux";
import {
  getCart,
  addItemQuantity,
  removeItem,
  minusItemQuantity,
  sumItemPrice,
  sumItemQuantity,
  getTotalQuantity
} from "../../../redux/postsRedux";
import CountingItems from "./CountingItems";

const mapStateToProps = state => ({
  cart: getCart(state),
  quantity: getTotalQuantity(state)
});

const mapDispatchToProps = dispatch => ({
  addItemQuantity: id => dispatch(addItemQuantity(id)),
  minusItemQuantity: id => dispatch(minusItemQuantity(id)),
  removeItem: payload => dispatch(removeItem(payload)),
  sumItemPrice: () => dispatch(sumItemPrice()),
  sumItemQuantity: () => dispatch(sumItemQuantity())
});

export default connect(mapStateToProps, mapDispatchToProps)(CountingItems);
