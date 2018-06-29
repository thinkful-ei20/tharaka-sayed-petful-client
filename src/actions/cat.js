import {API_BASE_URL} from '../config'

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST'
const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST
})

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS'
const fetchCatSuccess = (cat) => ({
  type: FETCH_CAT_SUCCESS,
  cat
})

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR'
const fetchCatError = (error) => ({
  type: FETCH_CAT_ERROR,
  error
})

export const fetchCat = () => (dispatch) => {
  dispatch(fetchCatRequest())
  fetch(`${API_BASE_URL}/api/cat`)
    .then(res => res.json())
    .then(cat => {
      console.log('cats fetched')
      dispatch(fetchCatSuccess(cat))
    })
    .catch(error => dispatch(fetchCatError(error)))
}

export const adoptCat = () => dispatch => {
  dispatch(fetchCatRequest())
  return fetch(`${API_BASE_URL}/api/cat`, {
    method: 'DELETE'
  })
  .then(() => {
    console.log('fetching next cat')
    dispatch(fetchCat())
  })
  .catch(error => {
    console.log('errored')
    dispatch(fetchCatError(error))
  })
}