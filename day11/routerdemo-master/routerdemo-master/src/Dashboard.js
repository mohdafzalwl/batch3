import React, { Component } from 'react';


class Dashboard extends Component {
    state = {  }
    render() { 
        console.log(this.props.authed)
        return ( 
            <div>
                <h1>Protected Route </h1>
            </div>
         );
    }
}
 
export default Dashboard;