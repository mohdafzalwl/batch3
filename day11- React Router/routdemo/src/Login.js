import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'



class Login extends Component {
    state = { 
        email: "",
        password: "",
        redirectTo : false
     }
     handleChange =(evt)=>{
         this.setState({
             [evt.target.name] : evt.target.value
         })
     }
     handleSubmit = (evt)=>{
         evt.preventDefault()
         //we have to process the form 
         this.props.loginHandler() 
         this.redirectAuth()
        //  this.props.history.push('/dashboard')
     }
     redirectAuth =()=>{
         this.setState({
             redirectTo : true
         })
     }
    render() { 
        console.log('from Login js',this.props)
       const {from} = this.props.location.state || {from : {pathname: '/'}}
    //    console.log(from)
        if(this.state.redirectTo === true){
           return  <Redirect to={from}/>
        }
        return ( 
        <div>
 <form onSubmit={this.handleSubmit}>
     <input value={this.state.email} name="email" 
     onChange={this.handleChange} />
     <input value={this.state.password} name="password" 
     onChange={this.handleChange} />
     <button type="submit">Submit</button>
 </form>
        </div> );
    }
}
 
export default Login;