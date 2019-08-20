import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
//actioncreators from aaction
import {incrementCount,decrementCount} from './action'
const Counter = (props)=>{
    console.log(props)
    return(
        <div>
            <h1>count: {props.count} </h1>
            <button onClick={props.incrementCount}>incrementCount</button>
            <button onClick={props.decrementCount}>decrementCount</button>
        </div>
    )
}
const mapStateToProps = state => ({
    count : state.message.count
})
const mapDispatchToProps = dispatch =>bindActionCreators({
    incrementCount,
    decrementCount
},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(Counter)