import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProductsSort, sortBy } from '../../../redux/postsRedux.js';
import SideBar from './SideBar';


 const SideBarContainer = ({ sortBy }) => {
    return <SideBar sortBy={sortBy} />;
  };
  
  SideBarContainer.propTypes = {
    sortBy: PropTypes.func.isRequired
  };
  

const mapStateToProps = state => ({
     products: getProductsSort(state),
   })

const mapDispatchToProps = {
    sortBy
  };

export default connect(mapStateToProps, mapDispatchToProps)(SideBarContainer);