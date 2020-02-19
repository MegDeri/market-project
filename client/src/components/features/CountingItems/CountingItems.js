import React from "react";

import Button from "../../common/Button/Button";
import "./CountingItems.scss";

class CountingItems extends React.Component {
  handleAddItemQuantity = () => {
    const {
      products,
      addItemQuantity,
      sumItemPrice,
      sumItemQuantity,
      quantity
    } = this.props;
    addItemQuantity(products.id);
    sumItemPrice();
    sumItemQuantity(quantity);
  };

  handleMinusItemQuantity = () => {
    const {
      products,
      minusItemQuantity,
      removeItem,
      sumItemPrice,
      sumItemQuantity,
      quantity
    } = this.props;
    if (products.quantity === 1) {
      removeItem(products.id);
    } else {
      minusItemQuantity(products.id);
    }
    sumItemPrice();
    sumItemQuantity(quantity);
  };

  handleRemoveItem = () => {
    const {
      products,
      removeItem,
      sumItemPrice,
      sumItemQuantity,
      quantity
    } = this.props;
    removeItem(products.id);
    sumItemPrice();
    sumItemQuantity(quantity);
  };

  render() {
    const { products } = this.props;
    return (
      <div className="item-counter">
        <Button variant="secondary" onClick={this.handleMinusItemQuantity}>
          –
        </Button>
        <div className="countNo">{products.quantity}</div>
        <Button variant="secondary" onClick={this.handleAddItemQuantity}>
          +
        </Button>
        <Button variant="danger" onClick={this.handleRemoveItem}>
          Remove item
        </Button>
      </div>
    );
  }
}

export default CountingItems;
