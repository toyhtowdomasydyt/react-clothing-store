import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import Header from './components/header/header';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SingInAndUpPage from './pages/sign-in-and-up/sing-in-and-up';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact={true} path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SingInAndUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
