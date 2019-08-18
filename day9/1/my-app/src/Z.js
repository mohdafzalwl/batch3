import React, { Component } from 'react';
import zoid from 'zoid'

var MyLoginComponent = zoid.create({
 
    tag: 'my-login-component',
    url: 'http://www.35.196.193.199:3000'
});

class Z extends Component {
    render() { 
        return ( 
            <div><MyLoginComponent/></div>
         );
    }
}
 
export default Z;