import {DELETE_HIKE} from '../actions'

const initialState = {
  remaining: []
}

export default function(state = initialState, action) {

  switch (action.type) {

    case DELETE_HIKE:
      console.log('test')return {remaining: action.payload}
  }
  return state;
}
