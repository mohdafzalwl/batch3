import React from 'react';
class Users extends React.Component {
    render() {
    console.log('users', this.props)
    let done = this.props.list.filter((list) => list.friend === true)
    let todo = this.props.list.filter((list)=> list.friend !== true)
    console.log(done)
      return (
        <div>
          <h1>Todo</h1>
          <ul>
            {todo.map((list, index)=> (
                <li key={index}>{list.name}</li>
            ))}
          </ul>
          
          <hr />
          
          <h1> Done </h1>
          <ul>
            {done.map((list,index)=>(
                <li key={index}>{list.name}</li>
            ))}
          </ul>        
        </div>
      )
    }
  }
  

export default Users