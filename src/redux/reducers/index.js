import { combineReducers } from 'redux';
import dataReducer from './dataReducer'
import moveReducer from './moveReducer'

const rootReducer = combineReducers({
    dataReducer,
    moveReducer
})

export default rootReducer