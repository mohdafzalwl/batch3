import React from 'react';
import ReactDOM from 'react-dom'
import Test from './test'
import ListContacts from './ListContacts'
import User from './User'
const contacts = ["me" , "some" ,"etc"]
const contacts2 = ["me" , "some" ,"etc"]
const list=[
      
    { name: 'iam doing it', friend: true },
    { name: 'i am done with it', friend: false },
    { name: 'i am not done', friend: false },
    { name: 'i have to eat', friend: true },
    { name: 'goto gym', friend: false } 
]
  
 
class App extends React.Component{
    render(){
       
        return(
         <div>
              
              <User list={list}/>
       </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('main')
)