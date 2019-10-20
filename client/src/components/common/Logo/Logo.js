import React from 'react'
import './Logo.scss';
import logo from '../../../images/logo.png'

const Logo = ({ links, location }) => (
  <img src={logo} className="logo" width="175px" height="90px"/>
);

export default Logo;
