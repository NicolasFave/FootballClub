// Initial state

export const initialState = {
  collection: {
    fetching: false,
    data: null,
    error: null,
  }
}

// Action Types

const COMPETITIONS_REQUEST = 'COMPETITIONS_REQUEST'
const COMPETITIONS_SUCCESS = 'COMPETITIONS_SUCCESS'
const COMPETITIONS_ERROR = 'COMPETITIONS_ERROR'

export const ActionTypes = {
  COMPETITIONS_REQUEST,
  COMPETITIONS_SUCCESS,
  COMPETITIONS_ERROR,
}

// Action Creators

const competitionsRequest = () => {
  return {
    type: COMPETITIONS_REQUEST,
  }
}

const competitionsSuccess = (data) => {
  return {
    type: COMPETITIONS_SUCCESS,
    payload: data,
  }
}

const competitionsError = (error) => {
  return {
    type: COMPETITIONS_ERROR,
    payload: error
  }
}

export const ActionCreators = {
  competitionsRequest,
  competitionsSuccess,
  competitionsError,
}

// Selectors

const getCompetitions = (state) => {
  return state.competitions.collection
}

export const Selectors = {
  getCompetitions,
}

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPETITIONS_REQUEST:
      return {
        ...state,
        collection: {
          fetching: true,
          data: null,
          error: null,
        }
      }
    case COMPETITIONS_SUCCESS:
      return {
        ...state,
        collection: {
          fetching: false,
          data: action.payload,
          error: null,
        }
      }

    case COMPETITIONS_ERROR:
      return {
        ...state,
        collection: {
          fetching: false,
          data: null,
          error: action.payload,
        }
      }
    default:
      return state
  }
}

export default reducer
