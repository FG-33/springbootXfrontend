import { combineReducers } from 'redux'
import todos from './todo'

// global reducer definition
const rootReducer = combineReducers({
  todos
})

export default rootReducer