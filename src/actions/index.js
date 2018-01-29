import history from '../containers/History'
const ROOT_URL = 'https://api.outerspatial.com/v0/trailheads?per_page=5&distance=5&near_addr='
var token = localStorage.getItem('access_token')

function parseJwt(x) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
};
var decoded = parseJwt(token)
decoded = decoded.userId

export const FETCH_HIKES = 'FETCH_HIKES'
export const fetchHikes = (location) => {
  return async(dispatch) => {
    const url = ROOT_URL + location;
    const request = await fetch(url)
    const json = await request.json()
    dispatch({type: FETCH_HIKES, payload: json.data})
  }
}

export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const loginUser = (credentials) => {
  return async(dispatch) => {
    const request = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(credentials)
    });

    const body = await request.json();
    console.log(body.token)
    return dispatch({type: LOG_IN_SUCCESS, payload: body.token})
  };
}

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const registerUser = (credentials) => {
  return async(dispatch) => {
    const request = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    const raw = await request.status
    if (raw === 200) {
      history.push('/login')
    } else {
      history.push('/FourOhFour')
    }
  };
}

export const ADD_HIKE = 'ADD_HIKE'
export const addHike = (userId, hike_id, hikename, clientToken) => {
  return async(dispatch) => {
    // console.log(userId, hikeId, hikeName, realClientToken)

// clientToken, hikename, thumbnailUrl
    const request = await fetch(`${process.env.REACT_APP_API_URL}/tohikelist/${1}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({userId, clientToken, hike_id, hikename})
    })
    // (clientToken, hike_id, hikename)

    const raw = await request.status
  }
}

export const VIEW_MYHIKES = 'VIEW_MYHIKES'
export const seeHikes = (clientToken) => {
  console.log("called seeHikes");
  console.log('clientoken in action', clientToken);
  return async(dispatch) => {

    const request = await fetch(`${process.env.REACT_APP_API_URL}/tohikelist`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': clientToken
      }
    })
    const hikes = await request.json()
console.log('HIKES', hikes);
    dispatch({type: VIEW_MYHIKES, payload: hikes})
  }
}

export const ADD_IMG = 'ADD_IMG'
export const UPDATE_MYHIKES = 'UPDATE_MYHIKES'
export const addImage = (thumbnailUrl, clientToken, id, hike_name, hike_id) => {
  return async (dispatch) => {
      const request = await fetch(`${process.env.REACT_APP_API_URL}/tohikelist/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ thumbnailUrl, clientToken, hike_name, hike_id, id})
      })
      let hike = await request.json()
      console.log('hike after image request', hike);
      // seeHikes(clientToken)
      dispatch({type: UPDATE_MYHIKES, payload: hike})
    }
}
//
// export const DELETE_HIKE = 'DELETE_HIKE'
// export const deleteHike = (id, hike_name) => {
//   return async (dispatch, getState) => {
//     const state = getState();
//     const messageIds = state.remaining.allIds.filter((hikeId) => {
//       return state.messages.byId[hikeId].selected
//     })
//
//     await updateMessages({
//       "messageIds": messageIds,
//       "command": "delete"
//     })
//
//     dispatch({ type: DELETE_HIKE, messageIds })
//   }
// }

async function request(path, method = 'GET', body = null) {
  if (body)
    body = JSON.stringify(body)
  return await fetch(`${process.env.REACT_APP_API_URL}${path}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: body
  })
}
