import axios from 'axios';
import { API_URL } from '../config';


// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* SELECTORS */
export const getProducts = ({ products }) => products.data;
export const getRequest = ({ products }) => products.request;
export const getProductsSort = ({ products, key, direction }) => {
   const sortedProducts = products.data.sort((a, b) => {
        if (a[key] > b[key]) return direction === 'asc'? 1 : -1;
        if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
        return 0;
    });
    return sortedProducts;
};

/* ACTIONS */
export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });
export const startRequest = () => ({ type: START_REQUEST});
export const endRequest = () =>({type: END_REQUEST});
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const sortBy = (direction, payload) => ({ direction, payload, type: SORT_BY });

export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const SORT_BY = createActionName('SORT_BY');

/* INITIAL STATE */

const initialState = {
    data: [],
    //info if products list is uploaded
    request: {
        pending: false,
        error: null,
        success: null,
    },
    direction: {
        name: "asc"
      },
};

/* THUNKS */
export const loadProductsRequest = () => {
    return async dispatch => {
        
        dispatch(startRequest());
        try {
        let res = await axios.get(`${API_URL}/products`);
            await new Promise((resolve, reject) => setTimeout(resolve, 2000));
            dispatch(loadProducts(res.data));
            dispatch(endRequest());
        
        } catch(e) {
            dispatch(errorRequest(e.message));
        }
    };
};

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
      case LOAD_PRODUCTS:
          return {...statePart, data: action.payload};
      case START_REQUEST:
          return {...statePart, request: {pending: true, success: null, error: null}};
      case END_REQUEST:
          return {...statePart, request: {pending: false, success: true, error: null}};
      case ERROR_REQUEST:
          return {...statePart, request: {pending: false, success: false, error: action.error}}
        case SORT_BY:
            return {...statePart,  direction: {name: "asc" ? "desc" : "asc"}}
         
    default:
      return statePart;
      
  }
};

