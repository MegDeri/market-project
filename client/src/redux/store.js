import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// import reducers
import products from './postsRedux';
import cartReducer from './cart.reducer';

// combine reducers
const rootReducer = combineReducers({
    products,
    cart: cartReducer
  });

  // create store
const store = createStore (
    rootReducer,
    compose (
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;