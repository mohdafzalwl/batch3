import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Login extends Component {
    state={
        username: "",
        password: ""
    }
    handleSubmit =(e)=> {
        //check
        e.preventDefault()
        console.log("hello")
        this.props.loginHandler()
    }
    handleChange = input => e => {
        this.setState({
            [input] : e.target.value
        })

    }

    render() { 
        console.log(this.props)
        const {username,password} = this.state
        return ( 
            <div>
            <h1>Hi Login User {this.props.username}</h1>
            <form onSubmit={this.handleSubmit}>
                <input name="username" placeholder="username"
                onChange={this.handleChange("username") }
                value={this.state.username}
                />
                <input name="password" placeholder="password"
                onChange={this.handleChange("password") }
                value={this.state.password} /> 
                <button type="submit">Submit</button>
               
            </form>

        
            
         
            </div>
         );
    }
}
 
export default Login;