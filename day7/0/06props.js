import React  from 'react';
import ReactDOM from 'react-dom'

var USER_DATA = {
    name: 'swiggy',
    
    username: 'swiggyusername'
  }
  
  class Badge extends React.Component {
    render() {
      return (
        <div>
         
          <h1>Name: </h1>
          <h3>username: </h3>
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <Badge user={USER_DATA}/>,
    document.getElementById('app')
  );