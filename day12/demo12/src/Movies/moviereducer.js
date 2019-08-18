// import {GET_MOVIES} from './movieaction'
const initailState ={
    movies: [],
    isloaded: false,
    movie:{}
    
}

//reducer function
export default function(state=initailState, action){
    const {type,data} = action
    switch(type){
        case 'GET_MOVIES':
            return {...state, movies: data , isloaded:true}
        case 'GET_MOVIE':
            return{...state, movie:data}
        case 'RESET_MOVIE':
            return {...state, movie : {}}
       
        default :
        return {...state}
    }
}





