import { connect } from "react-redux";
import {
  getProductsSort,
  loadProductsByPageRequest,
  getRequest,
  getPages,
  presentPage
} from "../../../redux/postsRedux";
import { Products } from "./Products";

const mapStateToProps = state => ({
  request: getRequest(state),
  pages: getPages(state),
  products: getProductsSort(state),
  presentPage: presentPage(state)
});

const mapDispatchToProps = dispatch => ({
  loadProductsByPage: (page, productsPerPage) =>
    dispatch(loadProductsByPageRequest(page, productsPerPage))
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
