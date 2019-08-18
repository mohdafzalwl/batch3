import React, { Component } from 'react';
import ReactDOM from 'react-dom'


class HelloWorld1 extends Component {
    render () {
      return (
        <div>Hello {this.props.name}</div>
      )
    }
  }
  ReactDOM.render(<HelloWorld1 name='Tom' />, document.getElementById('app'))
// stateless functional component below 


function HelloWorld (props) {
    return (
      <div>Hello {props.name}</div>
    )
  }
  ReactDOM.render(<HelloWorld name='Tom' />, document.getElementById('app'))