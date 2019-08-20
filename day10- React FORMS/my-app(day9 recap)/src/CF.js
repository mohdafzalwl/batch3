import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core'
//syntax before v16.5 --- before Class FIELDS released in ES
class CF extends Component {
    constructor(props) {
        super(props);
        this.state = { email :"" , password:""}
        console.log('UP IN CONSTRUCTOR',this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
  handleChange(evt){
        console.log('DOWN IN EVENT',this)
        this.setState({
           [evt.target.name] : evt.target.value
        })
    }
 handleSubmit(evt){
        evt.preventDefault()
        alert(JSON.stringify(this.state))
        //process form 
    }
render() { 
        return ( 
        <div>
         <form onSubmit={this.handleSubmit}>
             <TextField 
              label="Name"
             name="email"
             type ="email"
             value={this.state.email}
             onChange={this.handleChange}
             placeholder="enter email"
             margin="normal"
             variant="outlined"
             />
             
             <TextField
              label="Password"
             name = "password"
             type="password"
             value={this.state.password}
             onChange={this.handleChange}
             placeholder="enter password"
             margin="normal"
             variant="outlined"
             />
             
             <Button>Submit</Button>
         </form>
        </div> 
        );
    }
}
 
export default CF;