import { combineReducers } from 'redux'
import HikesReducer from './reducer_hikes'
import ActiveHikeReducer from './reducer_active_hike'


const rootReducer = combineReducers({
hikes: HikesReducer,
activeHike: ActiveHikeReducer
})

export default rootReducer
