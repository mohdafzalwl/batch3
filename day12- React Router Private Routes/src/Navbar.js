import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
class Navbar extends Component {
    render() { 
        return ( 
            <div>
       <NavLink exact activeClassName="selected" to='/' >Home</NavLink>
        <NavLink  activeClassName="selected" to='/about' >About</NavLink>
        <NavLink   activeClassName="selected" to='/topics' >Topic</NavLink>
        <NavLink  activeClassName="selected" to='/login' >Login</NavLink>
      <NavLink to='/products' activeClassName="selected">Products</NavLink>
            </div>
         );
    }
}
 
export default Navbar;