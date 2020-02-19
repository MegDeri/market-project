import React from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function sumTotal(cartState) {
  return cartState.reduce((prev, current) => {
    return prev + current.quantity;
  }, 0);
}

export default class NavBar extends React.Component {
  render() {
    const { cart } = this.props;

    return (
      <nav className="navbar">
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink exact to="/product" activeClassName="active">
          All Products
        </NavLink>
        <NavLink exact to="/faq" activeClassName="active">
          FAQ
        </NavLink>
        <NavLink exact to="/contact" activeClassName="active">
          Contact
        </NavLink>
        <NavLink exact to="/cart" activeClassName="active">
          <FontAwesomeIcon icon={faShoppingCart} />
          Cart({sumTotal(cart) || 0})
        </NavLink>
      </nav>
    );
  }
}
