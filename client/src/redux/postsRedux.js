import axios from "axios";
import { API_URL, BASE_URL } from "../config";

// action name creator
const reducerName = "products";
const createActionName = name => `app/${reducerName}/${name}`;

/* SELECTORS (passing props to components)*/
export const getProducts = ({ products }) => products.data;
export const getRequest = ({ products }) => products.request;
export const getSingleProduct = ({ products }) => products.singleProduct;
export const getPages = ({ products }) =>
  Math.ceil(products.amount / products.productsPerPage);
export const presentPage = ({ products }) => products.presentPage;
export const getCart = ({ products }) => products.cart;
export const getProductsSort = ({ products }) => {
  const sortedProducts = [...products.data].sort((a, b) => {
    if (a[products.key] > b[products.key])
      return products.direction === "asc" ? 1 : -1;
    if (a[products.key] < b[products.key])
      return products.direction === "asc" ? -1 : 1;
    return 0;
  });
  return sortedProducts;
};
export const getTotalPrice = ({ products }) => products.totalPrice;
export const getDiscountStatus = ({ products }) => products.discountStatus;
export const getTotalQuantity = ({ products }) => products.totalQuantity;

/* ACTIONS */
export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });
export const loadSingleProduct = payload => ({
  payload,
  type: LOAD_SINGLE_PRODUCT
});
export const loadProductsByPage = payload => ({
  payload,
  type: LOAD_PRODUCTS_PAGE
});
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const setSortOptions = payload => ({ payload, type: SET_SORT_OPTIONS });
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const addItemQuantity = id => ({ id, type: ADD_ITEM_QUANTITY });
export const minusItemQuantity = id => ({ id, type: MINUS_ITEM_QUANTITY });
export const removeItem = payload => ({ payload, type: REMOVE_ITEM });
export const sumItemPrice = () => ({ type: SUM_ITEM_PRICE });
export const sumItemQuantity = () => ({ type: SUM_ITEM_QUANTITY });
export const addDiscountCode = () => ({ type: ADD_DISCOUNT_CODE });

export const LOAD_PRODUCTS = createActionName("LOAD_PRODUCTS");
export const LOAD_SINGLE_PRODUCT = createActionName("LOAD_SINGLE_PRODUCT");
export const LOAD_PRODUCTS_PAGE = createActionName("LOAD_PRODUCTS_PAGE");
export const START_REQUEST = createActionName("START_REQUEST");
export const END_REQUEST = createActionName("END_REQUEST");
export const ERROR_REQUEST = createActionName("ERROR_REQUEST");
export const SET_SORT_OPTIONS = createActionName("SET_SORT_OPTIONS");
export const ADD_TO_CART = createActionName("ADD_TO_CART");
export const ADD_ITEM_QUANTITY = createActionName("ADD_ITEM_QUANTITY");
export const MINUS_ITEM_QUANTITY = createActionName("MINUS_ITEM_QUANTITY");
export const REMOVE_ITEM = createActionName("REMOVE_ITEM");
export const SUM_ITEM_PRICE = createActionName("SUM_ITEM_PRICE");
export const SUM_ITEM_QUANTITY = createActionName("SUM_ITEM_QUANTITY");
export const ADD_DISCOUNT_CODE = createActionName("ADD_DISCOUNT_CODE");

const initialState = {
  data: [],
  //info if products list is uploaded
  request: {
    pending: false,
    error: null,
    success: null
  },
  singleProduct: [],
  direction: "",
  key: "",
  amount: 0,
  productsPerPage: 6,
  presentPage: 1,
  cart: [],
  totalPrice: 0,
  totalQuantity: 1,
  discount: 1,
  discountStatus: false
};

/* THUNKS */
export const loadProductsRequest = () => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${BASE_URL}${API_URL}/products`);
      dispatch(loadProducts(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const loadSingleProductRequest = id => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${BASE_URL}${API_URL}/products/${id}`);
      dispatch(loadSingleProduct(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const loadProductsByPageRequest = (page, productsPerPage) => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      //const productsPerPage = 6;

      const startAt = (page - 1) * productsPerPage;
      const limit = productsPerPage;

      let res = await axios.get(
        `${BASE_URL}${API_URL}/products/range/${startAt}/${limit}`
      );

      const payload = {
        products: res.data.products,
        amount: res.data.amount,
        productsPerPage,
        presentPage: page
      };

      dispatch(loadProductsByPage(payload));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...statePart, data: action.payload };

    case LOAD_SINGLE_PRODUCT:
      return { ...statePart, singleProduct: action.payload };

    case LOAD_PRODUCTS_PAGE:
      return {
        ...statePart,
        amount: action.payload.amount,
        productsPerPage: action.payload.productsPerPage,
        presentPage: action.payload.presentPage,
        data: [...action.payload.products]
      };

    case START_REQUEST:
      return {
        ...statePart,
        request: { pending: true, success: null, error: null }
      };

    case END_REQUEST:
      return {
        ...statePart,
        request: { pending: false, success: true, error: null }
      };

    case ERROR_REQUEST:
      return {
        ...statePart,
        request: { pending: false, success: false, error: action.error }
      };

    case SET_SORT_OPTIONS:
      return {
        ...statePart,
        key: action.payload.key,
        direction: action.payload.direction
      };

    case ADD_TO_CART:
      const addedItem = action.payload;

      return { ...statePart, cart: statePart.cart.concat(addedItem) };

    case ADD_ITEM_QUANTITY:
      const quantityItem = statePart.cart.find(
        product => product.id === action.id
      );
      quantityItem.quantity += 1;
      const plusItem = statePart.cart.map(product =>
        product.id === action.id ? quantityItem : product
      );
      return { ...statePart, cart: plusItem };

    case MINUS_ITEM_QUANTITY:
      const minusItemQ = statePart.cart.find(
        product => product.id === action.id
      );
      minusItemQ.quantity -= 1;
      const minusItem = statePart.cart.map(product =>
        product.id === action.id ? minusItemQ : product
      );
      return { ...statePart, cart: minusItem };

    case REMOVE_ITEM:
      const remItem = statePart.cart.filter(
        product => product.id !== action.payload
      );
      return { ...statePart, cart: remItem };

    case ADD_DISCOUNT_CODE:
      return {
        ...statePart,
        discount: 0.9,
        discountStatus: true
      };

    case SUM_ITEM_PRICE:
      let roundedPrice;

      if (statePart.cart.length !== 0) {
        let itemsTotalPrice = statePart.cart.map(cartItem =>
          cartItem.product
            ? cartItem.price * cartItem.quantity
            : cartItem.price * cartItem.quantity
        );
        itemsTotalPrice = itemsTotalPrice.reduce(
          (previousPrice, newPrice) => previousPrice + newPrice
        );
        const totalPriceWithDiscount = statePart.discountStatus
          ? itemsTotalPrice * statePart.discount
          : itemsTotalPrice;
        roundedPrice = parseFloat(totalPriceWithDiscount.toFixed(2));
      } else {
        roundedPrice = 0;
      }

      return {
        ...statePart,
        totalPrice: roundedPrice
      };
    case SUM_ITEM_QUANTITY:
      let sumQuantity;
      if (statePart.cart.length !== 0) {
        let itemsTotalQuantity = statePart.cart.map(itemQuantity =>
          itemQuantity.product ? itemQuantity.quantity : itemQuantity.quantity
        );
        sumQuantity = itemsTotalQuantity.reduce(
          (prevQuan, newQuan) => prevQuan + newQuan
        );
      } else {
        sumQuantity = 0;
      }

      return {
        ...statePart,
        totalQuantity: sumQuantity
      };

    default:
      return statePart;
  }
}
