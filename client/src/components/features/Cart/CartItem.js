 import React from "react";

export default class CartItem extends React.Component {
  render() {
    const {id, name, price, amount, picture } = this.props;
    return (
      <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
          <img className="w2 h2 w3-ns h3-ns br-100" src={picture} />
          <div className="pl3 flex-auto">
            <span className="f6 db black-70">{name}</span>
            <span className="f6 db black-70">{price}</span>
          </div>
          <div>
           <span>Amount: {amount}</span>
           <button>+</button>
           <button>-</button>
          </div>
      </li>
    )
  }
} 
