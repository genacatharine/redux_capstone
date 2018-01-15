import {VIEW_MYHIKES} from '../actions'

export default function(state = [], action) {
  switch (action.type) {
    case VIEW_MYHIKES:
      return action.payload
  }
  return state;
}
