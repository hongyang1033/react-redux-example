import axios from "axios";

export function fetchUsers() {
  return function(dispatch) {
    axios.get()
      .then((response) => {
        dispatch({type: 'FETCH_USERS_FULFILLED', payload: response.data}); //object
      })
      .catch((error) => {
        dispatch({type: 'FETCH_USERS_REJECTED', payload: erro});
      })
  }
}
