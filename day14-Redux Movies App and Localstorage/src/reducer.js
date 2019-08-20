import {TOGGLE_MESSAGE, INCREMENT_COUNT , DECREMENT_COUNT} from './action'
const initialState = {
    messageVisibility: false,
    count : 0
}

export default function(state=initialState,action){
    switch(action.type){
        case TOGGLE_MESSAGE:
            return {...state ,messageVisibility : !state.messageVisibility }
        case INCREMENT_COUNT:
          return {...state ,count : state.count + 1 }
        case DECREMENT_COUNT:
         return {...state ,count : state.count - 1 }
        default : 
        return {...state}
    }
}



    