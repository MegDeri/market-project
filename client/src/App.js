import React from 'react';
import { Switch, Route } from "react-router-dom";

import  { MainLayout } from './components/layout/MainLayout/MainLayout';

//import routes
import { Home } from './components/pages/Home/Home';
import  Products from './components/pages/Product/ProductsContainer';
import  SingleProductPage  from './components/pages/SingleProductPage/SingleProductPage';
import { ContactPage } from './components/pages/Contact/ContactPage';
import { NotFoundPage } from './components/pages/NotFound/NotFoundPage';

class App extends React.Component {
  
  render() {
    return (
      
      <MainLayout>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/product"} component={Products}/>
          <Route exact path={"/product/:id"} component={SingleProductPage} />
          <Route exact path={"/contact"} component={ContactPage} />
          <Route exact component={NotFoundPage} />
        </Switch>
     </MainLayout>
     
    );
  }
}

export default App;
