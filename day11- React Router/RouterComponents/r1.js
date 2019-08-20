import React, { Component } from 'react'
import P3 from '../P3'
import {
  BrowserRouter as Router, 
  Route,
  Link
  
} from 'react-router-dom'
const Home = () => (
  <h2>Home</h2>
)
const Login = () => (
  <h2>Login page</h2>
)
class R1 extends Component {
  render() {
    return (
      <Router>
        <div>
        <Link to='/'>home</Link>
       <Link to='/login'>Login</Link>
      <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
        </div>
      </Router>
    )
  }
}

export default R1