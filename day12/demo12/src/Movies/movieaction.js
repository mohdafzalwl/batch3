
import api from './api'
//action creators are functions that will return action type 
import apiData from './apidata'
export function getMovies(){
    return async function(dispatch){
        const response = await api
        
        
        return dispatch({
            type: "GET_MOVIES",
            data:response

        })
    }
}

// const response = await apiData.find((data)=> data._id === getMovieId)

export function getMovie(id){
    return async function(dispatch){
        const response = await apiData.find((data) => data._id === id)
        return dispatch({
          type:'GET_MOVIE',
          data:response
        })
    }
}

export function resetMovie(){
    return{
        type : 'RESET_MOVIE'
    }
}