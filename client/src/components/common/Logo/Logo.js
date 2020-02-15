import React from 'react'
import { Link } from "react-router-dom";
import './Logo.scss';
import logo from '../../../images/logo.png'

const Logo = ({ links, location }) => (
  <Link exact to="/">
     <img src={logo} className="logo" width="135px" height="110px" alt="nopic"/>
  </Link>
);

export default Logo;
