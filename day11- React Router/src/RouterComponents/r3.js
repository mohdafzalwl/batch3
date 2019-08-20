import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)
const About = () => (
  <div>
    <h2>About</h2>
  </div>
)
const Topic = () => (
    <div>
      <h3>TOPIC</h3>
    </div>
)
const Topics = () => (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`/topics/rendering`}>
            Rendering with React
          </Link>
        </li>
        <li>
          <Link to={`/topics/components`}>
            Components
          </Link>
        </li>
        <li>
          <Link to={`/topics/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>
     <Route path={`/topics/rendering`} component={Topic} />
  <Route path={`/topics/components`} component={Topic} />
<Route path={`/topics/props-v-state`} component={Topic} />
    </div>
  )
  


class R3 extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/topics' component={Topics} />
        </div>
      </Router>
    )
  }
}

export default R3
