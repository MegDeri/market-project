import React from 'react';

import Button from '../../common/Button/Button';

//import './CountingItems.scss';

class CountingItems extends React.Component {


    handleAddItemQuantity = () => {
        const { products, addItemQuantity } = this.props;
        addItemQuantity(products.id);
        
    }

    
    render() {

        const { products } = this.props;

        return (
            <div className='item-counter'>
                <div className='item-counter-actions'>
                    <Button variant='secondary'>–</Button>
                    <div>{products.quantity}</div>
                    <Button variant='secondary' onClick={ this.handleAddItemQuantity }>+</Button>
                </div>
                <Button variant='danger'>Remove item</Button>
            </div>
        );
    }
}

export default CountingItems;