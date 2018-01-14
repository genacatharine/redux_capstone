import { VIEW_MYHIKES} from '../actions'

const initialState = {
  myhikes: []
}

export default function(state=initialState, action){

  switch(action.type){

    case VIEW_MYHIKES:
      console.log('test')
      return {
        myhikes: action.payload
      }
  }
  return state;
}
