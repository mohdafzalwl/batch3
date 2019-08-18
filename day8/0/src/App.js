import React, { Component } from 'react';
import './App.css';
import ListContacts from './ListContacts'
 import Grid from './Grid'
class App extends Component {
  state= {
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
    count : 0
  }
  
  removeContact = (contact)=>{
    this.setState({
      contacts : this.state.contacts.filter((c)=> c.id !== contact.id)
    })
  }

  inCrement = ()=>{
    this.setState({
      count : this.state.count + 1
    })
  }

  // removeContact = (contact)=>{
  //  console.log(contact)
  // }


  render() {
    return (
      <div className="App">

       <ListContacts  
       contacts={this.state.contacts}
       onDeleteContact = {this.removeContact}
       
       />
        <br/>
        {/* <Grid/> */}
      </div>
    );
  }
}

export default App;
