import { combineReducers } from 'redux'
import HikeReducer from './reducer_hike'
// import AddedHikeReducer from './backendhike'



const rootReducer = combineReducers({
  hikes: HikeReducer
  // addedhikes: AddedHikeReducer
})

export default rootReducer
