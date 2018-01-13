import {
  LOG_IN_SUCCESS
} from '../actions';

const initialState = false

export default (state = initialState, action) => {
  switch(action.type) {
    case LOG_IN_SUCCESS:
      localStorage.setItem('token', action.payload)
      

      console.log('LOCALSTORAGE', localStorage.token)
      return action.payload;
    default:
      return state;
  }
}
