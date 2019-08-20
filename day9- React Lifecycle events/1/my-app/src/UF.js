import React, { Component } from 'react';
//never use uncontrolled form 
class UF extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.input = React.createRef()
    }
    handleSubmit(evt){
         alert("alert" + this.input.current.value) 
        evt.preventDefault()

    }
    render() { 
        return ( 
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref={this.input} />
                <button>Submit</button>
                </form>
        </div> );
    }
}
 
export default UF;