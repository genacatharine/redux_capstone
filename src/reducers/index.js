import { combineReducers } from 'redux'
import HikeReducer from './reducer_hike'
import AuthReducer from './reducer_login'
// import AddedHikeReducer from './backendhike'



const rootReducer = combineReducers({
  hikes: HikeReducer,
  auth: AuthReducer,
  // addedhikes: AddedHikeReducer
})

export default rootReducer
