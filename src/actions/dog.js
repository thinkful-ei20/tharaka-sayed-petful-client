import {API_BASE_URL} from '../config'

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST'
const fetchDogRequest = () => ({
  type: FETCH_DOG_REQUEST
})

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS'
const fetchDogSuccess = (dog) => ({
  type: FETCH_DOG_SUCCESS,
  dog
})

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR'
const fetchDogError = (error) => ({
  type: FETCH_DOG_ERROR,
  error
})

export const fetchDog = () => (dispatch) => {
  dispatch(fetchDogRequest())
  fetch(`${API_BASE_URL}/api/dog`)
    .then(res => res.json())
    .then(dog => dispatch(fetchDogSuccess(dog)))
    .catch(error => dispatch(fetchDogError(error)))
}

export const adoptDog = () => dispatch => {
  dispatch(fetchDogRequest())
  fetch(`${API_BASE_URL}/api/dog`, {
    method: 'DELETE'
  })
  .then(() => dispatch(fetchDog()))
  .catch(error => dispatch(fetchDogError(error)))
}