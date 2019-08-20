import React from 'react';

class Label extends React.Component {
    render() {
      console.log('label component',this.props)
      return (
        <h1>Name: {this.props.name} </h1>
      )
    }
  }
  
  class ScreenName extends React.Component {
    render() {
      console.log('screename',this.props)
      return (
        <h3>Username:{this.props.user} </h3>
      )
    }
  }
  
  class Badge extends React.Component {
    render() {
      console.log(this.props) 
      return (
        <div>
          <Label name = {this.props.list.name} />
          <ScreenName user = {this.props.list.username} />
        </div>
      )
    }
  }
  
export default Badge