import { INIT_POS, MOVE_LEFT, MOVE_RIGHT } from '../actionType'

const defaultState = {
    gridWidth: 0,
    index: 0,
    tabPos: 0,
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
            return {...state, 
                index: state.index++,
                scrollPos: state.tabPos[state.index]
            }
        case MOVE_RIGHT: 
            return {...state, 
                index: state.index--,
                scrollPos: state.tabPos[state.index]
            }
        default: 
            return state
    }
}