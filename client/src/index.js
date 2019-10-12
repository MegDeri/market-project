import React from 'react';
import {render} from 'react-dom';
import App from './App';
import './styles/global.scss';
//import 'animate.css/animate.min.css';
import { BrowserRouter } from "react-router-dom";



const Root = () => (
    <BrowserRouter>
        <App/> 
    </BrowserRouter>
  );

const rootElement = document.getElementById('root');
   
render(<Root/>, rootElement );