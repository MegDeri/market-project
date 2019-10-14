import axios from 'axios';
import { API_URL } from '../config';


// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* SELECTORS */
export const getProducts = ({ products }) => products;

/* ACTIONS */
export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });
export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');

/* INITIAL STATE */

const initialState = [];

/* THUNKS */
export const loadProductsRequest = () => {
    return async dispatch => {
        
        try {
        let res = await axios.get(`${API_URL}/products`);
            dispatch(loadProducts(res.data));
        
        } catch(e) {
            console.log(e.message);
        }
    };
};

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
      case LOAD_PRODUCTS:
          return [...action.payload];
    default:
      return statePart;
  }
};