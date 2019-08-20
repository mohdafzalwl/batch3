{/* <Route path component exact /> */}
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
{/* <Route path component exact /> */}

import React, { Component } from 'react'
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom'
const Home = () => (<div><h2>Home</h2></div>)
const About = () =>  ( <div> <h2>About</h2></div>)
const Topic = ({ match }) =>{ return (<div>   <h3>{match.params.topicId}</h3></div>)}
const Topics = ({ match }) =>   (  <div>
    <h2>Topics</h2>
    <ul><li> <Link to={`${match.url}/rendering`}>Rendering with React </Link></li>
      <li>
        <Link to={`${match.url}/components/`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state/app`}>
          Props v. State
        </Link>
      </li>
      
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
    </ul>
    {/* /topics */}
  
  
    <Route exact path={`${match.url}/:topicId/home`} component={About}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

class R4 extends Component {
  render() {
    return (

<Router>
<div>
 <ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/about">About</Link></li>
<li><Link to="/topics">Topics</Link></li>
 </ul>
<hr/>
<Switch>
<Route exact path="/" component={Home}/>
<Route path="/about" component={About}/>
<Route path="/topics" component={Topics}/>
<Route  render={() =>
   <div>404  Not Found page found </div>} />
</Switch>
</div>
</Router>
    )
  }
}

export default R4



