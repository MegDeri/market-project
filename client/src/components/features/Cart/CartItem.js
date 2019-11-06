import React from "react";

const CartItem = ({cart}) =>  (
  <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
      <img className="w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" />
      <div className="pl3 flex-auto">
        <span className="f6 db black-70">Mrmrs</span>
        <span className="f6 db black-70">Medium Hexagon, LLC</span>
      </div>
      <div>
        <a href="tel:" className="f6 link blue hover-dark-gray">+1 (999) 555-5555</a>
      </div>
  </li>
)

export default CartItem;