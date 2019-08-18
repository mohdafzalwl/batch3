import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListContacts extends Component {
    state = { 
        query : "",
       showContactInfo : false
     }
    updateQuery = (query)=>{
         console.log(query)
         this.setState({
             query : query.trim()
         })
     }
     clearQuery = ()=> {
         this.updateQuery(' ')
     }
     showClick = () =>{
         console.log(this.state)
         this.setState({
            showContactInfo : !this.state.showContactInfo
         })
     }
     render() { 
        //  console.log(this.props)
        const {contacts , onDeleteContact } = this.props
        const {query ,showContactInfo} = this.state;
        const Showcontacts = query === ''
                      ? contacts
                      : contacts.filter((c)=>(c.name.toLowerCase().includes(query.toLowerCase())))
         
        return ( 
        <div>
          {JSON.stringify(query)}
          <br/>
          <input value={query}  placeholder="Search" onChange={(event)=>this.updateQuery(event.target.value)} />
            <br/>

            {Showcontacts.length !== contacts.length && (
                <div>
                    <span>Now Showing</span>
                    {Showcontacts.length} of {contacts.length}
                    <button onClick={this.clearQuery}>Clear</button>
                    </div>
            )}
               <ol>
                {Showcontacts.map((contacts,index)=>
                      <li key={index}>
                     <div
                className="contact-avatar"
                style={{
                  backgroundImage: `url(${contacts.avatarURL})`
                }}>
                     <p>{contacts.name} <span style={{border: "1px solid red"}} onClick={this.showClick} >X</span> </p>
                     {showContactInfo ? 
                        (<div>   <p>{contacts.handle}</p>
                    <button onClick={()=>onDeleteContact(contacts)}>Remove</button>  </div>)
                     : null}
                  
                    </div>
                    </li>
                    
                    )}
            </ol>
        </div>  
        );
    }
}
 




// const ListContacts = (props) => {
// console.log(props)
//     return (
//         <div>
//             <ol>
//                 {props.contacts.map((contacts,index)=>
//                       <li key={index}>
//                      <div
//                 className="contact-avatar"
//                 style={{
//                   backgroundImage: `url(${contacts.avatarURL})`
//                 }}>
//                      <p>{contacts.name} </p>
//                      <p>{contacts.handle}</p>
//                     <button onClick={()=>props.onDeleteContact(contacts)}>Remove</button> 
//                     </div>
//                     </li>
                    
//                     )}
//             </ol>
//         </div>
//     )
// }

ListContacts.propTypes = {
    contacts : PropTypes.array.isRequired,
    onDeleteContact : PropTypes.func.isRequired
}




export default ListContacts;