/**
 * action = {
 * type: "STRING",
 * payload: "DATA"
 * }
 */

 const INITIAL_STATE = [
     [
         {
            id: '1',
            name: 'Shoes 1',
            price: '€ 35',
         }
     ]
 ]

export default function cartReducer(state = INITIAL_STATE, action = {}) {

    return state;
}