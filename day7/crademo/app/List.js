import React from 'react';
//state
// class List extends React.Component{
//     render(){
//  console.log('Listscomponent',this.props.friends)
//         return(
//             <div>
//            <h1>Hello List</h1>
//       {this.props.friends.map((list,index)=> (
//                     <li key={index}>{list}</li>
//     ))}
//             </div>
//         )
//     }
// }

//functional component
const List = (props)=> {
    const {friends, name} = props
    return(
        <div>
        <h1>Hello List {name}</h1>
                {friends.map((list,index)=> (
                 <li key={index}>{list}</li>
                ))}
        </div>
    )
}



export default List