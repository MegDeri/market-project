import React from 'react';
import {render} from 'react-dom';
import App from './App';
import './styles/global.scss';
//import 'animate.css/animate.min.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';



const Root = () => (
    <Provider store={store}>
        <BrowserRouter>
            <App/> 
        </BrowserRouter>
    </Provider>
  );

const rootElement = document.getElementById('root');
   
render(<Root/>, rootElement );