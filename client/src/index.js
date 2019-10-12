import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/global.scss';

//function component
const Root = () => (
     <App/>
)
   
ReactDOM.render(<Root/>, document.getElementById('root'));