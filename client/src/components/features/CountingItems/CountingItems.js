import React from 'react';

import Button from '../../common/Button/Button';
import './CountingItems.scss';

class CountingItems extends React.Component {

handleAddItemQuantity = () => {
    const { products, addItemQuantity } = this.props;
    addItemQuantity(products.id);
    
}

handleMinusItemQuantity = () => {
    const { products, minusItemQuantity } = this.props;
    minusItemQuantity(products.id);
}

handleRemoveItem = () => {
    const { products, removeItem } = this.props;
    removeItem(products.id);
}

    render() {
        const { products } = this.props;
        return (
            <div className='item-counter'>
                <Button variant='secondary' onClick={this.handleMinusItemQuantity}>–</Button>
                <div className="countNo">{products.quantity}</div>
                <Button variant='secondary' onClick={this.handleAddItemQuantity}>+</Button>                
                <Button variant='danger' onClick={this.handleRemoveItem} >Remove item</Button>
            </div>
        );
    }
}

export default CountingItems;