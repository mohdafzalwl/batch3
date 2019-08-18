import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class HelloUser extends Component {
    render() {
      return (
        <div> Hello, {this.props.name}</div>
      )
    }
  }
  ReactDOM.render(<HelloUser name="wavelabs"/>, document.getElementById('app'));