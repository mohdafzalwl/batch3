import React, { Component } from 'react';
import {BrowserRouter as Router ,Link, Route} from 'react-router-dom'
import FoodR from './FoodR'
const data= [
    {
        path:'/',
        exact: true,
        sidebar: ()=><h1>Home sidebar</h1>,
        main: ()=><h1>Home Main</h1>
    },
    {
        path:'/about',
        sidebar: ()=><h1>About sidebar</h1>,
        main: ()=><h1>About Main</h1>
    },
    {
        path:'/contact',
        exact: true,
        sidebar: ()=><h1>Contact sidebar</h1>,
        main: ()=><h1>Contact Main</h1>
    },
    {
        path:'/food',
        sidebar: ()=><h1>food</h1>,
        main: ()=><FoodR/>
    }
]

export default function SideBarExample(){
    return (
     <div>
         <Router>
             <div style={{display:"flex"}}>
                 <div style={{border: "3px solid blcak" , backgroundColor:"#f5f5f5", width:"400px"}}>
                 <ul>
                <li> <Link to='/'> Home</Link></li>
               <li>  <Link to='/about'>About</Link> </li>
              <li>   <Link to='/contact'>Contact</Link></li> 
              <li>   <Link to='/food'>FoodR</Link></li> 
                 </ul>
                 {data.map((routes,index)=>(
                   <Route  key={index}
                   path={routes.path} component={routes.sidebar} exact={routes.exact}/>
                 ))}
                 </div>
                 <div style={{flex:1 , padding:"10px"}}>
                     {data.map((routes,index)=>(
                         <Route
                         key={index}
                         
                         path={routes.path}
                         exact={routes.exact}
                         component={routes.main} 
                         />
                     ))}
                      </div>
             </div>
         </Router>
         </div>

    )
}