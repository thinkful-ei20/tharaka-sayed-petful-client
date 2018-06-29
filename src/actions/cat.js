import {API_BASE_URL} from '../config'

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
  fetch(`${API_BASE_URL}/api/cat`)
    .then(res => res.json)
    .then(cat => dispatch(fetchCatSuccess(cat)))
    .catch(error => dispatch(fetchCatError(error)))
}