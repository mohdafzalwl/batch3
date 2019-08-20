
//react component 
//es5
// const React = require('react')
//es6 
import React from 'react'
import ReactDOM from 'react-dom'
import List from './List'
import NumberTest from './Number'
import Badge from './Badge'
import Users from './User'
const friends = ["tom" , "plant", "smacky"]
function getRand(){
    return friends[Math.floor(Math.random() * friends.length)]
}
function getNum(){
    return(Math.floor(Math.random() * 10)+ 1)
}

class App extends React.Component {
     render(){
         console.log('appcomponent',this.props)
        return(
            <div>
         <List friends={friends} name={"destructing"}/>
                {/* <h1>hello {getRand()} ! </h1>
                
                 
                 <hr/>
                 <NumberTest getNumber={getNum}/>
                 <hr/>
                 <Badge list={{
                     name: 'AAAAA  ',
                     img: 'd ',
                     username: 'aaaaaaa'
                   }} /> */}
                   <hr/>
                   {/* <Users list={[
    
    { name: 'iam doing it', friend: true },
    { name: 'i am done with it', friend: false },
    { name: 'i am not done', friend: false },
    { name: 'i have to eat', friend: true },
    { name: 'goto gym', friend: false } ]} 
  /> */}
            </div>
        )
     }
}

ReactDOM.render(<App/> , document.getElementById('root'))
