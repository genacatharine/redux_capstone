import { ADD_IMG } from '../actions'
//
const initialState = {
  addedimgs: []
}
//
export default function(state=initialState, action){

  switch(action.type){

    case ADD_IMG:
    localStorage.setItem('imgurl', action.payload)
      return action.payload
      // {
      //   addedimgs: action.payload
      // }
  }
  return state;
}
