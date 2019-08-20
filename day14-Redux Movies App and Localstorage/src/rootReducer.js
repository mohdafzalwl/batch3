import {combineReducers} from 'redux'

import message from './reducer'
import movies from './Movies/moviereducer'
const rootReducer = combineReducers({
    message,
    movies
   
})

export default rootReducer


