import React, { Component } from 'react';

class NumberTest extends Component {
    render() { 
         const num = this.props.getNumber()
       console.log('from Number test ',this.props)
        return ( 
                  <div>
                      <h1>Your Number {num} !</h1>
                      <h5>
                          {num == 7 ? 'Hello JSX' : 'Sorry'}
                      </h5>
                      {num === 7 &&
                      <img src="https://images.unsplash.com/photo-1564389442835-3ba8730ba5ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
                     }
                    
                      </div>
         );
    }
}
 export default NumberTest;