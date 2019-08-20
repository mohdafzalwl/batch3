import React from 'react';

class Contacts extends React.Component{
    state={
        query :''
    }
    updateQuery= (inputquery)=>{
       this.setState({
        query : inputquery.trim()
       })
    }
    render(){
        const {contacts,onDelete} = this.props
        const {query} = this.state
        const showContacts = query == ''
                                    ? contacts
                                    :contacts.filter((c)=> c.name.toLowerCase().includes(query.toLowerCase()))
        return(
         <div>
             <input  
             value={query}
             onChange={(event)=>this.updateQuery(event.target.value)}
             />
             <hr/>
            <h1> {JSON.stringify(query)} </h1>
          {showContacts.length !== contacts.length &&
                 <div>
                 <span>
                       Now showing
                   </span>
                 <span> { showContacts.length}  </span> of <span>{contacts.length} </span>
                 </div>
        }
          
         <div>
         {showContacts.map((contact ,index)=>(
            <li key={index}>
            <div>
                 <h3>{contact.name}</h3>
                 <h3>{contact.handle}</h3>
                <button onClick={()=>onDelete(contact)}> remove</button>
             </div>
            </li>
         ))}
        </div>
        </div>
        )
    }
}
export default Contacts


// const Contacts = (props)=>{
//     return(
//         <div>
//          {props.contacts.map((contact ,index)=>(
//             <li key={index}>
//             <div>
//                  <h3>{contact.name}</h3>
//                  <h3>{contact.handle}</h3>
//  <button onClick={()=>props.onDelete(contact)}>
     
//      remove</button>
//              </div>
//              </li>
//          ))}
//         </div>
        
//     )
// }


