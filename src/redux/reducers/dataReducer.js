import { SHOW_DATA } from '../actionType'

const defaultState = {
    data: null
}

export default (state = defaultState, action) => {
    switch (action.type){
        case SHOW_DATA: 
            return {...state, data: action.data}
        default: 
            return state
    }
}