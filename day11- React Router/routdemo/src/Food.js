import React, { Component } from 'react';

class Food extends Component {
   componentDidMount(){
       console.log("did mount")
   }
   componentWillUnmount(){
       console.log("unmount")
   }
    render() { 
        console.log("render")
        console.log(this.props)
const url = `https://source.unsplash.com/1600x900/?${this.props.name}`
        return ( 
            <div className='App'>
            <h1>Food Image</h1>
            <img src={url}/>
            </div>
         );
    }
}
 
export default Food;