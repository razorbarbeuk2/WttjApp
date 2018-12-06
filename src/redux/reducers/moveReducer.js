import { INIT_POS, MOVE_LEFT, MOVE_RIGHT, IMPOSE_INDEX } from '../actionType'

const defaultState = {
    gridWidth: 0,
    index: 0,
    tabPos: [],
    scrollPos: 0,
}

export default (state = defaultState, action) => {
    switch (action.type){
        case INIT_POS:
            return {
                ...state, 
                gridWidth: action.gridWidth,
                index: action.index,
                tabPos: action.tabPos,
                scrollPos: action.scrollPos
            };
        case MOVE_LEFT:
            return {...state, index: state.index - 1}
        case MOVE_RIGHT: 
            return {...state, index: state.index + 1}
        case IMPOSE_INDEX:
            return {...state, index: action.index, scrollPos: action.scrollPos}
        default: 
            return state
    }
}