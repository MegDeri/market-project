/**
 * action = {
 * type: "STRING",
 * payload: "DATA"
 * }
 */

 import {ADD_TO_CART} from './cart.actions';

 const INITIAL_STATE =  [];

 

export default function cartReducer(state = INITIAL_STATE, action = {}) {
    switch(action.type) {
        case ADD_TO_CART: {
            const item = action.payload;
            const cart = state;

            const existingProductIndex = findProductIndex(cart, item.id)
   
            const updatedCart = existingProductIndex >= 0
                ? updateProductAmount(cart, item)
                : [...cart, item ];

            return updatedCart;
        }
    }

    return state;
}

const findProductIndex = (cart, itemID) => {
    return cart.findIndex(p => p.id === itemID);
  };

  const updateProductAmount = (cart, item) => {
    const productIndex = findProductIndex(cart, item.id)
    
    const updatedCart = [...cart];
    const existingProduct = updatedCart[productIndex];
      
    const updatedAmountProduct = {
      ...existingProduct, 
      amount: existingProduct.amount + item.amount,
    };

    updatedCart[productIndex] = updatedAmountProduct;
    
      return updatedCart;    
  }