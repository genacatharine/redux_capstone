import { combineReducers } from 'redux'
import HikeReducer from './reducer_hike'


const rootReducer = combineReducers({
  hikes: HikeReducer

})

export default rootReducer
