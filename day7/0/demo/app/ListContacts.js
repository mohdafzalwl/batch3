import React , {Component} from 'react';

class ListContacts extends Component {
   
    render() { 
        console.log(this.props)
        const {contactsome, contacts2} = this.props
        return ( 
            <div>
                 {contactsome.map((list)=>(
                   <li key={list}>{list}</li>
               ))}
              <h1> this is other </h1>
                {contacts2.map((list)=>(
                   <li key={list}>{list}</li>
               ))}
            </div>
         );
    }
}
 
export default ListContacts;