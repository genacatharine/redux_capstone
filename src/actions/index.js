import axios from 'axios';

const ROOT_URL = 'https://api.outerspatial.com/v0/trailheads?per_page=5&distance=5&near_addr='

export const FETCH_HIKES = 'FETCH_HIKES'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'

export function fetchHikes(location) {
  const url = ROOT_URL + location;
  const request = axios.get(url)

  return {
    type: FETCH_HIKES,
    payload: request
  };
}

export function loginSuccess() {
  return {type: LOG_IN_SUCCESS}
}

export function logInUser(credentials) {
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
      sessionStorage.setItem('jwt', response.jwt);
      dispatch(loginSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}

class sessionApi {
  static login(credentials) {
    const request = new Request('https://my-hiking-journal.herokuapp.com/login', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({auth: credentials})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}
