import React from 'react';
import ReactDOM from 'react-dom'

class Users extends React.Component {
    render() {
    var friend = this.props.list.filter((list)=>{
              return list.friend === true;
            }) 
      var nonfriend = this.props.list.filter((list)=>{
              return list.friend !== true;
            }) 
      return (
        <div>
          <h1>Todo</h1>
          <ul>
            {friend.map((list)=>{
              return <li key={list.name}>{list.name}</li>
            })}
          </ul>
          
          <hr />
          
          <h1> Done </h1>
          <ul>
            {nonfriend.map((list)=>{
              return <li key={list.name}>{list.name}</li>
            })}
          </ul>        
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <Users list={[
      
      { name: 'iam doing it', friend: true },
      { name: 'i am done with it', friend: false },
      { name: 'i am not done', friend: false },
      { name: 'i have to eat', friend: true },
      { name: 'goto gym', friend: false } ]} 
    />,
    document.getElementById('app')
  );