// import axios from 'axios';
import history from '../containers/History'
import Cookies from 'universal-cookie';
import jwt_decode from 'jwt-decode';

var token = localStorage.getItem('token')
var user = localStorage.getItem('user')

const ROOT_URL = 'https://api.outerspatial.com/v0/trailheads?per_page=5&distance=5&near_addr='

var decoded = jwt_decode(token);

console.log('decoded', decoded)
console.log('user', user)



export const FETCH_HIKES = 'FETCH_HIKES'
export const fetchHikes = (location) => {
  return async (dispatch) => {
    const url = ROOT_URL + location;
    // const request = axios.get(url)
    const request = await fetch(url)
    const json = await request.json()
    // console.log('JSON IS', json.data)
    dispatch({
      type: FETCH_HIKES,
      payload: json.data
    })

  }

}

export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const loginUser = (credentials) => {
  return async (dispatch) => {
    // console.log(credentials)

    const request = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(credentials)
    });

    const body = await request.json();

    console.log(body);

    return dispatch({
      type: LOG_IN_SUCCESS,
      payload: body.token,
    })

    // const cookies = new Cookies();
    // cookies.set('mhj-jwt', body.token, {path: '/'});
    // const raw = await request.status
    // // console.log(raw)
    // if (raw===200){
    //   // return true;
    //   window.location.href = '/';
    // }
    // else {
    //   history.push('/register')
    // }
    // // console.log('json', json)

  };
}

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const registerUser = (credentials) => {
  return async (dispatch) => {
    // console.log(credentials)
    const request = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(credentials)
    })

    const raw = await request.status
    // console.log(raw)
    if (raw===200){
      history.push('/login')
    }
    else {
      history.push('/FourOhFour')
    }
  };
}

export const ADD_HIKE = 'ADD_HIKE'
export const addHike = (x, clientToken) => {
  return async (dispatch) => {
    const request = await fetch(`${process.env.REACT_APP_API_URL}/tohikelist/`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ x, clientToken })
    })

    const raw = await request.status
    // console.log('rawwwww', raw)
  }
}

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
