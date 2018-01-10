import {
  LOG_IN_SUCCESS
}
const initialState = {
  email: '',
  password: ''
}

export default (state = initialState, action) => {

switch(action.type){
  case LOG_IN_SUCCESS:
  return {
    ...state
  }
}
}
