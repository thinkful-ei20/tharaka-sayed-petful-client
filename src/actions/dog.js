import {API_BASE_URL} from '../config'

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
  fetch(`${API_BASE_URL}/api/dog`)
    .then(res => res.json)
    .then(dog => dispatch(fetchDogSuccess(dog)))
    .catch(error => dispatch(fetchDogError(error)))
}

export const adoptDog = () => dispatch => {
  
}