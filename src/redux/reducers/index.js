import { combineReducers } from 'redux'
import moveReducer from './moveReducer'
import showVideoReducer from './showVideoReducer'

const rootReducer = combineReducers({
    moveReducer,
    showVideoReducer
})

export default rootReducer