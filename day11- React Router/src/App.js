import React, { Component } from 'react';
import {Route, Link,Switch,Redirect} from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import Products from './Products'
const Home =() => <h1>Home Page </h1>
//higher order components, will accepts component as argument and returns a component
function PrivatRoute({component:Component , authState, ...props}){
           return(
             <Route 
               {...props}
               render = {(props) => authState === true 
                          ? <Component {...props}/>
                          : <Redirect to={{pathname:'/login', state:{from:props.location}}} />
              }
             />
           )
}
{/* <Route path='' render={(...props) => <Component {...props}/>} */}

class App extends Component {

  state = { 
    authState: false
   }
   loginHandler = ()=>{
     this.setState({
       authState: true
     })
   }
   logoutHandler =()=>{
     this.setState({
       authState:  false
     })
   }
  render() { 
    return ( 
      <React.Fragment>
      <nav>
           <Link to='/'> HOme</Link>
           <Link to='/login'>Login</Link>
           <Link to='/dashboard'>Dashboard</Link>
           <Link to='/products'>Products</Link>
           <button onClick={this.logoutHandler}>Logout</button>
      </nav>
     <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/login'    render={(props)=><Login loginHandler={this.loginHandler} {...props}/>}/>
        {/* <Route path='/dashboard' component={Dashboard}/> */}
        <PrivatRoute path='/dashboard' authState={this.state.authState} component={Dashboard}/>
        <PrivatRoute path='/products' authState={this.state.authState} component={Products}/>
     </Switch>

      </React.Fragment>
     );
  }
}
 
export default App;