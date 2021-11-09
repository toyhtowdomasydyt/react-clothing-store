import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import Header from './components/header/header';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SingInAndUpPage from './pages/sign-in-and-up/sing-in-and-up';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      } else {
        this.setState({currentUser: userAuth});
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribeFromAuth !== null && this.unsubscribeFromAuth !== undefined) {
      this.unsubscribeFromAuth();
    }
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact={true} path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SingInAndUpPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
