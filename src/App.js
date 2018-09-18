import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import { connect } from 'react-redux'
import { toggleAuthenticatingUser } from './actions'
import './App.css';

class App extends Component {

  componentDidMount () {
    if (localStorage.getItem('token')){

    } else {
      this.props.toggleAuthenticatingUser()
    }
  }

  render() {
    return (
     <Fragment>
     <Switch>
       <Route exact path='/' component={Home}/>
       <Route exact path='/login' component={Login}/>
       <Route exact path='/sign_up' component={Signup}/>
       <Redirect to='/' />
     </Switch>
   </Fragment>
   );
  }
}

export default withRouter(connect(null, { toggleAuthenticatingUser })(App))
