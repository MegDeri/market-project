import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setSortOptions, getProductsSort } from "../../../redux/postsRedux.js";
import SideBar from "./SideBar";

const SideBarContainer = ({ setSortOptions }) => {
  return <SideBar setSortOptions={setSortOptions} />;
};

SideBarContainer.propTypes = {
  setSortOptions: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: getProductsSort(state)
});

const mapDispatchToProps = {
  setSortOptions
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBarContainer);
