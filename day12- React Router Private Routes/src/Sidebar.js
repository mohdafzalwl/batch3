import React, { Component } from 'react';
import {BrowserRouter as Router,Link , Route} from 'react-router-dom'
const routes = [
    {
      path: "/",
      exact: true,
      sidebar: () => <div>home sidebar!</div>,
      main: () => <h2>Home</h2>
    },
    {
      path: "/bubblegum",
      sidebar: () => <div>bubblegum sidebar!</div>,
      main: () => <h2>Bubblegum</h2>
    },
    {
      path: "/shoelaces",
      sidebar: () => <div>shoelaces sidebar!</div>,
      main: () => <h2>Shoelaces</h2>
    }
  ];
  
  class Sidebar extends Component {
    componentDidMount(){
      console.log("mounted")
    }
    componentWillUnmount(){
      console.log("unmounted")
    }
      render() { 
        console.log("render")
          return ( 
              <div style={{display:"flex"}}>
              <div 
              style={{ backgroundColor: "#f0f0f0" , padding:"10px", width:"40%"}}>
              <h1>Side Bar Div</h1>
              <ul>
              <Link to='/'>Home</Link><br/>
              <Link to='/bubblegum'>bubblegum</Link><br/>
              <Link to='/shoelaces'>shoelaces</Link><br/>
              
              {routes.map((routes)=>(
                  <Route 
                  path={routes.path}
                  component={routes.sidebar}
                  exact={routes.exact}
                  />
              ))}
              </ul>
              </div>
              <div>
                  {routes.map((routes)=>(
                      <Route 
                          path={routes.path}
                          exact={routes.exact}
                          component={routes.main}
                      />
                  ))}
              </div>
              </div>
           );
      }
  }
   
  export default Sidebar;