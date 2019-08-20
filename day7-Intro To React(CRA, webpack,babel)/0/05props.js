import React from 'react';
import ReactDOM from 'react-dom'

class Badge extends React.Component {
    render() {
      return (
        <div>
        <h1> </h1>
          <h3> </h3>
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <Badge 
      name  =  'anant'
      username ='kumar'
      />,
    document.getElementById('app')
  );