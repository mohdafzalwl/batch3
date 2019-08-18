import React, { Component } from 'react'; 
import {applyMiddleware,createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './rootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import Toggle from './Toggle'
import logger from 'redux-logger'
import Counter from './Counter'
import MovieList from './Movies/movieList'
import {Switch,Route} from 'react-router-dom'
import MovieDetail from './Movies/MovieDetail'
import thunk from 'redux-thunk'
import { save, load } from "redux-localstorage-simple"
import SideBar from './Sidebar'
const middleware = [logger,thunk]
// const hello = ()=>({welcome: "hello"})
const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(...middleware , save()))
  )

class App extends Component {
  render() { 
    return (
        <Provider store={store}>
           
           <Switch>
             <Route exact path='/' component= {MovieList}/>
             <Route exact path='movies/:id' component={MovieDetail}/>
           </Switch>

    

       </Provider>
     );
  }
}
 export default App;



 // const initialState = {
//   welcome: "Before the dispatch",
//    userisLoggedIn : false
//   }
// const greeting = (state=initialState, action)=>{
//   switch(action.type){
//     case  'WELCOME_ME': 
//     return { ...state, welcome : `Hello ${action.name}`}
//     case 'WELCOME_WORLD':
//       return { ...state ,welcome: "Hello World"}
//     case 'USER_LOGIN':
//       return { ...state, userisLoggedIn : true , data: `${action.data}`}
//     default :
//     return {...state}  

//   }
// }
// const store = createStore(greeting)
// console.log(store.getState())
// let name = "afzal"
// //dispatch
// store.dispatch({
//   type:"WELCOME_ME",
//   name
// })
// console.log(store.getState())
// store.dispatch({
//   type:"WELCOME_ME",
//   name: "new name"
// })
// console.log(store.getState())
// const data = "coming from api"
// store.dispatch({
//   type:"USER_LOGIN",
//   data
// })
// console.log(store.getState())
// //
// store.dispatch({
//   type: "USER_LOGIN"
// })
// console.log(store.getState())

// store.dispatch({
//   type:"WELCOME_WORLD"
// })
// console.log(store.getState())