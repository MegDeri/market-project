import React from "react";
import { Link } from "react-router-dom";

export const Header = (props) => {
  return (
    <div>
      <nav>
        <div>Navbar</div>
        <Link to="/">Home</Link>
        <Link to="product/:id">User</Link>
        <Link to="contact">Contact</Link>
      </nav>
    </div>
  );
};
