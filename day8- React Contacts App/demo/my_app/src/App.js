import React from 'react';
import './App.css';
import Counter from './Counter'
import Contacts from './Contact'
class App extends React.Component{
  state={
    contacts : [
      {
        id: '1',
        name: 'afzal',
        handle: '@afzal',
        avatarURL: 'https://res.cloudinary.com/dspz2t0am/image/upload/v1545377545/undraw_experts3_3njd.svg'
      },
      {
        id: '2',
        name: 'tom',
        handle: '@tom',
        avatarURL: 'https://res.cloudinary.com/dspz2t0am/image/upload/v1545377545/undraw_experts3_3njd.svg'
      },
      {
        id: '3',
        name: 'Richard',
        handle: '@richard',
        avatarURL: 'https://res.cloudinary.com/dspz2t0am/image/upload/v1545377545/undraw_experts3_3njd.svg'
      },
    ],
    count : 0,
  }
  incrementCount = ()=>{
    this.setState({
      count : this.state.count + 1
    })
  }
  decrementCount = ()=>{
    this.setState({
      count : this.state.count - 1 
    })
  }
  
  removeContact = (contact)=>{
    this.setState({
contacts: 
this.state.contacts.filter((c)=> c.id !== contact.id)
    })
  }

  render(){
    return(
      <div>
       
        <Contacts contacts={this.state.contacts}
         onDelete ={this.removeContact}/>
      </div>
    )
  }
}


export default App;
