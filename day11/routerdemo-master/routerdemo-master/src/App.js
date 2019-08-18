import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link,Redirect,NavLink} from 'react-router-dom'
import './App.css';
import Login from './Login'
import LoginR from './LoginR'
import LoginC from './LoginC'
import Sidebar from './Sidebar'
import Home from './Home'
import Dashboard from './Dashboard'
import Result from './Result'
function PrivateRoute({ component: Component, authed, ...rest }) {
  console.log("private route", Component, authed)
  return (
    <Route
      {...rest}
      render={(props) => authed === true
           ? <Component {...props} /> : <Redirect to={{ pathname: '/login',
           state: { from: props.location } }} />}
    />
  )
}



class App extends Component {
  state = { 
    authed: false
   }

   loginHandler = ()=>{
     this.setState({
      authed : true 
     })
   }

  render() { 
    return ( 
      <div>
        <Router>
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
          <Link to='/dashboard'>Dashboard</Link>
      <Route path='/home' component={Home}/>

      <Route path='/login' component={()=><Login loginHandler={this.loginHandler}/>}/>

      <PrivateRoute exact path='/dashboard' authed={this.state.authed} component={Dashboard}/>
       </Router>
      </div>

     );
  }
}
 
export default App;

