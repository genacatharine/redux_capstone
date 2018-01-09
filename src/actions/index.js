import axios from 'axios';

const ROOT_URL = 'https://api.outerspatial.com/v0/trailheads?per_page=5&distance=5&near_addr='

export const FETCH_HIKES = 'FETCH_HIKES'

export function fetchHikes(location) {
  const url = ROOT_URL + location;
  const request = axios.get(url)

console.log('Request', request)

  return {
    type: FETCH_HIKES,
    payload: request
  };
}
