import axios from 'axios';

const ROOT_URL = 'https://api.outerspatial.com/v0/trailheads?per_page=5&distance=5&near_addr='

export const FETCH_HIKES = 'FETCH_HIKES'
export const fetchHikes = (location) => {
  return async (dispatch) => {
    const url = ROOT_URL + location;
    // const request = axios.get(url)
    const request = await fetch(url)
    const json = await request.json()

    console.log(json)

    dispatch({
      type: FETCH_HIKES,
      payload: json.data
    })
  }

}

// export function loginSuccess() {
//   return {type: LOG_IN_SUCCESS}
// }
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const loginUser = (credentials) => {
  return async (dispatch) => {
    console.log(credentials)

    const request = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(credentials)
    })
    // new Request('https://my-hiking-journal.herokuapp.com/login', {
    //       method: 'POST',
    //       headers: new Headers({
    //         'Content-Type': 'application/json'
    //       }),
    //       body: JSON.stringify({auth: credentials})
    //     });
    const json = await request.json()

    console.log(json)

    // dispatch({
    //   type: LOG_IN_SUCCESS,
    //
    // })
    //
    // return sessionApi.login(credentials).then(response => {
    //   sessionStorage.setItem('jwt', response.jwt);
    //   dispatch(loginSuccess());
    // }).catch(error => {
    //   throw(error);
    // });
  };
}

// class sessionApi {
//   static login(credentials) {
//     const request = new Request('https://my-hiking-journal.herokuapp.com/login', {
//       method: 'POST',
//       headers: new Headers({
//         'Content-Type': 'application/json'
//       }),
//       body: JSON.stringify({auth: credentials})
//     });
//
//
//     return fetch(request).then(response => {
//       return response.json();
//     }).catch(error => {
//       return error;
//     });
//   }
// }

async function request(path, method = 'GET', body = null) {
  if (body) body = JSON.stringify(body)
  return await fetch(`${process.env.REACT_APP_API_URL}${path}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: body
  })
}
