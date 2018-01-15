import {REGISTER_SUCCESS}
const initialState = {
  email: '',
  password: ''
}

export default(state = initialState, action) => {

  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state
      }
  }
}
