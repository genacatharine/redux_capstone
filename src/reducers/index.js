import { combineReducers } from 'redux'
import HikeReducer from './reducer_hike'
import AuthReducer from './reducer_login'
import ViewReducer from './reducer_seehike'
// import AddedHikeReducer from './backendhike'



const rootReducer = combineReducers({
  hikes: HikeReducer,
  auth: AuthReducer,
  myhikes: ViewReducer,
  // addedhikes: AddedHikeReducer
})

export default rootReducer
