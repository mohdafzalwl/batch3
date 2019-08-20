import React, { Component } from 'react';

class FoodR extends Component {
   
    back =()=>{
        this.props.history.push('/')
    }
    render() { 
        console.log("render")
        console.log(this.props)
const url = `https://source.unsplash.com/1600x900/?${this.props.name}`
        return ( 
            <div className='App'>
 <button onClick={this.back}> Go Home </button>
     <h1>Food Image Render PRops</h1>
            <img src={url}/>
        </div>
         );
    }
}
 
export default FoodR;