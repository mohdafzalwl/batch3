import React, { Component } from 'react';
import axios from 'axios';
class GithubUser extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user: '',
            avatar:''
         }
    }
    //only once 
 async componentDidMount(){
     const url = `https://api.github.com/users/${this.props.username}`
     const response = await axios.get(url)
     this.setState({
         user: response.data.login,
         avatar : response.data.avatar_url
     })
    }
    //calls after render methods , u can do comparision between the previous and current props and state
    componentDidUpdate(prevProps, prevState) {
        console.log('preve Proops', prevProps)
        console.log('prev state', prevState)
    }
    //component will Unmount
    componentWillUnmount(){
        //remove from demo
    }
     render() { 
        console.log(this.props.username)
        return ( 
            <div>
                <h1>GithubUser Data</h1>
                <h2>{this.state.user}</h2>
                <img src={this.state.avatar} />
            </div>
         );
    }
}export default GithubUser;