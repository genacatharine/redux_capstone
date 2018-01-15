import { FETCH_HIKES} from '../actions'

const initialState = {
  hikes: []
}

export default function(state=initialState, action){

  switch(action.type){

    case FETCH_HIKES:
      return {
        hikes: action.payload
      }
  }
  return state;
}
