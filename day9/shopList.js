import React, { Component } from 'react';

class ShoppingListForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name:"", qty:"" }
        this.handleChange= this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(evt){
        evt.preventDefault()
        this.props.addItem(this.state)
    }
    handleChange(evt){
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }
    render() { 
        return ( 
            <div>
                <form>
                    <input name="email" value={this.state.name} onChange={this.handleChange}/>
                    <input  name="qty" value={this.state.qty} onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
         );
    }
}
 
export default ShoppingListForm;