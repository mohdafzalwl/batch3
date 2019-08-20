import React, { Component } from 'react';
import './App.css';
import Food from './Food'
import FoodR from './FoodR'
import SideBarExample from './sideBar'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import {Route} from 'react-router'
import { Route,NavLink ,Link ,Switch} from "react-router-dom";
const Home = ()=> (<h1>Home page</h1>)
const About = ()=> (<h1>About page</h1>)
const Contact = ()=> (<h1>Contact page</h1>)
const Products = ()=> (<h1> Products page</h1>)
const Topic = (props)=>{
  console.log("from 14 topic" , props)
  return (
  <div>
  <h1>Nested Routing Example</h1>
  <h1>{props.match.params.id}</h1>
  </div>
)}
const Topics = (props)=>{
  const {match} = props
  console.log('from topics ',props)
  return (
  <div>
    <h1>Topics</h1>
    <ul>
      <li>
        <Link to= 'topics/rendering'>Rendering</Link>
    <Link to={`${match.url}/rendering`}> Rendering</Link>
      </li>
      <li>
   <Link to={`${match.url}/components`}> components</Link>
      </li>
      <li>
   <Link to={`${match.url}/props`}> props</Link>
      </li>
    </ul>
    
<Route exact path ={`${match.url}/:id`} component={Topic}/>
<Route exact path={`${match.url}`} render={()=> <h1>Please select a Topic</h1>} />
  {/* <Route path ='/topics/components' component={Topic}/>
  <Route path ='/topics/props' component={Topic}/> */}
  </div>
)
}

class App0 extends Component{
  render(){
    return(
      <div>
       
        <nav>
          <NavLink  exact activeClassName='active-link'  to='/'>Home</NavLink>
          <NavLink activeClassName='active-link'  to='/about'>about</NavLink>
          <NavLink activeClassName='active-link'  to='/contact'>contact</NavLink>
          <NavLink  activeClassName='active-link'  to='/products'>Products</NavLink>
          <NavLink  activeClassName='active-link'  to='/topics'>Topics</NavLink>
          <NavLink  activeClassName='active-link'  to='/food'>Food</NavLink>
          {/* <NavLink exact activeClassName='active-link'  to='/sidebar'>Food Render PRops</NavLink> */}
          <NavLink activeClassName='active-link'  to='/foodr'>Food Render PRops</NavLink>
          <NavLink activeClassName='active-link'  to='/sidebar'>Sidebar</NavLink>
        </nav>
        {/* //first match component in that path */}
      <Switch>
   <Route exact path='/' component={Home} /> 
   <Route path='/about' component={About}/>
  <Route  path='/contact' component={Contact}/>
  <Route  path='/products' component={Products}/>
    <Route  path='/topics' component={Topics}/>
  <Route  path='/food' component={(props)=><Food {...props} name="holiday"/>}/>
  <Route path='/foodr'  render={(props)=> <FoodR name={"holiday"} {...props}/>} />
  <Route path='/sidebar' component={SideBarExample}/>
  <Route render={()=> <h1>404 Not Found</h1>} />
        {/* <App1/> */}
        </Switch> 
       
      </div>
    )
  }
}
export default App0







// https://source.unsplash.com/1600x900/?food



//it doesn let us show different pages . all in the frontend . we dont get a different url , we cannt bookmark page , 
// forward / backward 
// class App extends Component {
//   state={
//     pages: "about"
//   }
//   changePage = (newPage)=>{
//     this.setState({
//       pages: newPage
//     })
//   }
//   //conditional rendering
//   renderPage=()=>{
//     if(this.state.pages ==="about"){return <About/>}
//     else if(this.state.pages ==="contact"){return <Contact/>}
//     else if(this.state.pages ==="products"){return <Products/>}
//   }
//   render() { 
//      return ( 
//        <React.Fragment>
//        <nav>
//          <a onClick={()=>this.changePage("about")}>About</a>
//          <a onClick={()=>this.changePage("contact")}>Contact</a>
//          <a onClick={()=>this.changePage("products")}>Products</a>
//        </nav>
//        {this.renderPage()}
//        </React.Fragment>
//       );
//    }
//  }
 