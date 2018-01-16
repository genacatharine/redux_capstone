import {ADD_HIKE} from '../actions'

const initialState = {
  addedhikes: []
}

export default function(state = initialState, action) {

  switch (action.type) {

    case ADD_HIKE:
    localStorage.setItem('hikeID', action.payload)
      // console.log('test')
      return {addedhikes: action.payload}
  }
  return state;
}
