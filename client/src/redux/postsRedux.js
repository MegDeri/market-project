import axios from 'axios';
import { API_URL } from '../config';


// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* SELECTORS (passing props to components)*/
export const getProducts = ({ products }) => products.data;
export const getRequest = ({ products }) => products.request;
export const getProductsSort = ({ products }) => {
    const sortedProducts = products.data.sort((a, b) => {
         if (a[products.key] > b[products.key]) return products.direction === 'asc' ? 1 : -1;
         if (a[products.key] < b[products.key]) return products.direction === 'desc' ? -1 : 1;
         return 0;
     });
     return sortedProducts;
 };

//  function sortOn(property){
//     return function(a, b){
//         if(a[property] < b[property]){return products.direction === 'desc'
//             return -1;
//         }else if(a[property] > b[property]){
//             return 1;
//         }else{
//             return 0;   
//         }
//     }
// }

 
    
/* ACTIONS */
export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });
export const startRequest = () => ({ type: START_REQUEST});
export const endRequest = () =>({type: END_REQUEST});
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const setSortOptions = payload => ({ payload, type: SET_SORT_OPTIONS });

export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const SET_SORT_OPTIONS = createActionName('SET_SORT_OPTIONS');

/* INITIAL STATE */

const initialState = {
    data: [],
    //info if products list is uploaded
    request: {
        pending: false,
        error: null,
        success: null,
    },

    direction: "asc",
    key: "name",
    
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
      case SET_SORT_OPTIONS:
            return {...statePart,  direction: {direction: action.payload.direction, key: action.payload.key }}
         
    default:
      return statePart;
      
  }
};

