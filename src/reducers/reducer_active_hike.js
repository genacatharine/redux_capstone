export default function(state = null, action){
  switch(action.type) {
    case 'HIKE_SELECTED':
    return action.payload;
  }

  return state
}
