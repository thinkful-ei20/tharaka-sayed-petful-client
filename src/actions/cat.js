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
    .then(cat => dispatch(fetchCatSuccess(cat)))
    .catch(error => dispatch(fetchCatError(error)))
}

export const adoptCat = () => dispatch => {
  dispatch(fetchCatRequest())
  fetch(`${API_BASE_URL}/api/cat`, {
    method: 'DELETE'
  })
  .then(() => dispatch(fetchCat()))
  .catch(error => dispatch(fetchCatError(error)))
}