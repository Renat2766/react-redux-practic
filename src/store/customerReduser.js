const defaultState = {
  castomers: []
}

const ADD_CASTOMER = "ADD_CASTOMER"
const REMOVE_CASTOMERS = "REMOVE_CASTOMERS"
const ADD_MANY_CASTOMERS = "ADD_MANY_CASTOMER"

export const castomerReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ADD_MANY_CASTOMERS: 
      return {...state, castomers: [...state.castomers, ...action.payload]}
    case ADD_CASTOMER: 
      return {...state, castomers:[ ...state.castomers, action.payload]}
    case REMOVE_CASTOMERS:
      return {...state, castomers: state.castomers.filter(castomer => castomer.id !== action.payload)}
    default:
      return state
  }
}

export const addCastomerAction = (payload) => ({
  type: ADD_CASTOMER,
  payload
})
export const addManyCastomerAction = (payload) => ({
  type: ADD_MANY_CASTOMERS,
  payload
})
export const removeCastomerAction = (payload) => ({
  type: REMOVE_CASTOMERS,
  payload
})