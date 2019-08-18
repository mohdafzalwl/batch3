import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom'
  

class Navbar extends Component {
    state = {  }
    render() { 
        return (  
       <div>
             <Link to='/' > Home</Link>
             <Link to='/' > Products</Link>
       </div>

        );
    }
}
 
export default Navbar;