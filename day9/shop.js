import React, { Component } from 'react';
import ShoppingListForm from './shopList'
class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items :[
                {name:"Milk", qty : "2 gallon"},
                {name:"Bread", qty : "2 loaves"}
            ]
         }
         this.addItem = this.addItem.bind(this)
    }
    addItem(item){
        this.setState(state=>({
            items:[...state.items, item]
        }))
    }
    render() { 
        return ( 
        <div>
          <ul>
              {this.state.items.map((item)=> 
                <li>{item.name}: {item.qty}</li>
                )}
          </ul>
          <ShoppingListForm addItem={this.addItem}/>
        </div> );
    }
}
 
export default ShoppingList;