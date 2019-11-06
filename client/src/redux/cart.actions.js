export const ADD_TO_CART = "ADD_TO_CART";

export function addToCartAction({id, name, price, picture, amount}) {
    return {
        type: ADD_TO_CART,
        payload: {id, name, price, picture, amount}
    }
}