import { combineReducers } from 'redux'

import MainReducer from './components/MainSlice'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  passengers: MainReducer,
})

export default rootReducer