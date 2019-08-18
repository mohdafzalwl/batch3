import React, { Component } from 'react';

class LoginC extends Component {
    componentDidMount(){
        console.log("mounted in component render ")
        console.log(this.props)

    }
    componentWillUnmount(){
        console.log("unmountedmounted in component render ")

    }

    render() { 
        console.log("render in  component render")
        return ( 
            <h1>Hi {this.props.username}</h1>
         );
    }
}
 
export default LoginC;