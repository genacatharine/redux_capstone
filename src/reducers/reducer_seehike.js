import {VIEW_MYHIKES, UPDATE_MYHIKES } from '../actions'


export default function(state = [], action) {
  switch (action.type) {
    case VIEW_MYHIKES:
      return action.payload
    case UPDATE_MYHIKES:
      let hike = action.payload
      console.log("state in myhikes reducer", state);
      console.log("looking for", hike.id, "found", state.filter(_hike => _hike.id === hike.id))
      let index = state.indexOf(state.filter(_hike => _hike.id === hike.id)[0])
      console.log("index of hike", index, hike)
      console.log("myhikes after update", [...state.slice(0,index), hike, ...state.slice(index + 1)])
      return [...state.slice(0,index), hike, ...state.slice(index + 1)]
  }
  return state;
}
