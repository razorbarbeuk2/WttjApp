import { combineReducers } from 'redux'
import dataReducer from './dataReducer'
import moveReducer from './moveReducer'
import showVideoReducer from './showVideoReducer'

const rootReducer = combineReducers({
    dataReducer,
    moveReducer,
    showVideoReducer
})

export default rootReducer