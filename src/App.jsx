import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import Auth from './pages/auth/auth.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Collection from './pages/collection/collection.component';
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/checkout" component={CheckoutPage}/>
      <Route path="/auth" component={Auth} />
      <Route path="/shop/:collection" component={Collection} />
      <Route path="/shop" component={Shop} />
      <Route path="/" component={Homepage} />
    </Switch>
  </div>
);

export default App;
