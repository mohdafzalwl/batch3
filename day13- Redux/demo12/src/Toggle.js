import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {toggleMessage} from './action'
const Toggle = ({messageVisibility,toggleMessage,count})=> {
      return(
        <div>
            {messageVisibility &&  <h1>hi redux here</h1>}
            <button onClick={toggleMessage}>Toogle</button>
            <h1>Count from Counter : {count}</h1>
        </div>
    )
}
const mapStateToProps = state =>({
messageVisibility : state.message.messageVisibility,
count : state.message.count
})
const mapDispatchToProps = dispatch =>bindActionCreators ({
    toggleMessage,
},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(Toggle)
 