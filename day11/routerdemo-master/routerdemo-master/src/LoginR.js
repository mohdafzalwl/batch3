import React, { Component } from 'react';

class LoginR extends Component {
    componentDidMount(){
        console.log("mounted in  render ")

    }
    componentWillUnmount(){
        console.log("unmountedmounted in  render ")

    }

    render() { 
        console.log("render in   render")
        // console.log(this.props)

        return ( 
            <h1>Hi {this.props.username}</h1>
         );
    }
}
 
export default LoginR;