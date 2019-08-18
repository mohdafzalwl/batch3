//download the below dependencies
// 1. npm install --save react react-dom 
// 2. npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader html-webpack-plugin style-loader webpack webpack-cli webpack-dev-server
// 3. create app folder -
//     1. create file index.html0
//     2. create file index.js
//     3. create file index.css
// *****************************************************************************************************************************
// 4. index.js
//react
// const React = require('react');
// const ReactDOM = require('react-dom');
//react dom
import React from 'react';
import ReactDOM from 'react-dom';
require('./index.css');
class App extends React.Component{
    render(){
    return(
            <div>
            hello world 
            </div> 
    )
}
}
ReactDOM.render(
    <App/>,
  document.getElementById('content')
    )