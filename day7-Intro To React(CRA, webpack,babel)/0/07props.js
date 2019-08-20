import React from 'react';
import ReactDOM from 'react-dom'

//render a list using .map

class Users extends React.Component {
    render() {
     
    
    return (
    <div>
      <ol>
    
      </ol>
        </div>
    )
     
    }
  }
  
  ReactDOM.render(
    <Users list={["tom","plant","smacky"]} />,
    document.getElementById('app')
  );
  
  