import React, { Component } from 'react';

class User extends Component {
   
    render() { 
        const {list} = this.props
        let friend = list.filter((list)=> list.friend === true)
        let nonFriend = list.filter((list)=> list.friend !== true)
        console.log(this.props)
        
        return ( 
            <div>
                <h1>Friends</h1>
                {friend.map((list,index)=>(
                    <li key={index}>{list.name}</li>
                ))}
                <hr/>
                <h1>Non Friends</h1>
                {nonFriend.map((list,index)=>(
                    <li key={index}>{list.name}</li>
                ))}
            </div>
         );
    }
}
 
export default User;