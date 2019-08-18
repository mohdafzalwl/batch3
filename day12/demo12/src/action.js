//action type constants 
export const TOGGLE_MESSAGE = 'TOGGLE_MESSAGE'
export const INCREMENT_COUNT = 'INCREMENT_COUNT'
export const DECREMENT_COUNT = 'DECREMENT_COUNT'
//action creator - function which will return the action type

export function toggleMessage(){
    return{
        type : 'TOGGLE_MESSAGE'
    }
}

export function incrementCount(){
    return{
        type: 'INCREMENT_COUNT'
    }
}

export function decrementCount(){
    return{
        type : 'DECREMENT_COUNT'
    }
}

