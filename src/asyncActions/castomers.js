import { addManyCastomerAction } from "../store/customerReduser"

export const fetchCastomers = () => {
  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => dispatch(addManyCastomerAction(json)))
  }
}