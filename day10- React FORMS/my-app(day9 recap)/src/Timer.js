import React from 'react';

class Timer extends React.Component{
  constructor(props){
      super(props)
      this.state ={
          time : new Date()
      }
      console.log("in the constructor function")
  }
  
  componentDidMount(){
      console.log('COMPONENT DID MOUNT')
      this.timerId = setInterval(()=>{
       this.setState({time : new Date()})    
      }, 1000)
    
  }
  componentWillUnmount(){
      console.log('remove timeer from dom')
      clearInterval(this.timerId)
  }
      render(){
        console.log(" in the RENDER")
        return(
            <div>
                <h1>Timer {this.state.time.getSeconds()} </h1>
            </div>
        )
    }
}

export default Timer 