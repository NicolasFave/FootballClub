// Initial state

export const initialState = {
  collection: {
    fetching: false,
    data: null,
    error: null,
  },
  details: {
    fetching: false,
    data: null,
    error: null,
  },
}

// Action Types

const COMPETITIONS_REQUEST = 'COMPETITIONS_REQUEST'
const COMPETITIONS_SUCCESS = 'COMPETITIONS_SUCCESS'
const COMPETITIONS_ERROR = 'COMPETITIONS_ERROR'
const COMPETITION_DETAILS_REQUEST = 'COMPETITION_DETAILS_REQUEST'
const COMPETITION_DETAILS_SUCCESS = 'COMPETITION_DETAILS_SUCCESS'
const COMPETITION_DETAILS_ERROR = 'COMPETITION_DETAILS_ERROR'
const COMPETITION_ADD_REQUEST = 'COMPETITION_ADD_REQUEST'
const COMPETITION_ADD_SUCCESS = 'COMPETITION_ADD_SUCCESS'
const COMPETITION_ADD_ERROR = 'COMPETITION_ADD_ERROR'

export const ActionTypes = {
  COMPETITIONS_REQUEST,
  COMPETITIONS_SUCCESS,
  COMPETITIONS_ERROR,
  COMPETITION_DETAILS_REQUEST,
  COMPETITION_DETAILS_SUCCESS,
  COMPETITION_DETAILS_ERROR,
  COMPETITION_ADD_REQUEST,
  COMPETITION_ADD_SUCCESS,
  COMPETITION_ADD_ERROR,
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

const competitionDetailsRequest = (id) => {
  return {
    type: COMPETITION_DETAILS_REQUEST,
    id,
  }
}

const competitionDetailsSuccess = (data) => {
  return {
    type: COMPETITION_DETAILS_SUCCESS,
    payload: data,
  }
}

const competitionDetailsError = (error) => {
  return {
    type: COMPETITION_DETAILS_ERROR,
    payload: error
  }
}

const competitionAddRequest = (data) => {
  return {
    type: COMPETITION_ADD_REQUEST,
    payload: data,
  }
}

const competitionAddSuccess = (data) => {
  return {
    type: COMPETITION_ADD_SUCCESS,
    payload: data,
  }
}

const competitionAddError = (error) => {
  return {
    type: COMPETITION_ADD_ERROR,
    payload: error
  }
}

export const ActionCreators = {
  competitionsRequest,
  competitionsSuccess,
  competitionsError,
  competitionDetailsRequest,
  competitionDetailsSuccess,
  competitionDetailsError,
  competitionAddRequest,
  competitionAddSuccess,
  competitionAddError,
}

// Selectors

const getCompetitions = (state) => {
  return state.competitions.collection
}

const getDetails = (state) => {
  return state.competitions.details
}

export const Selectors = {
  getCompetitions,
  getDetails,
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

    case COMPETITION_DETAILS_REQUEST:
      return {
        ...state,
        details: {
          fetching: true,
          data: null,
          error: null,
        }
      }

    case COMPETITION_DETAILS_SUCCESS:
      return {
        ...state,
        details: {
          fetching: false,
          data: action.payload,
          error: null,
        }
      }

    case COMPETITION_DETAILS_ERROR:
      return {
        ...state,
        details: {
          fetching: false,
          data: null,
          error: action.payload,
        }
      }

    case COMPETITION_ADD_SUCCESS:

      const newCollectionData = [
        ...state.collection.data,
        action.payload,
      ]

      return {
        ...state,
        collection: {
          fetching: false,
          data: newCollectionData,
          error: null,
        }
      }

    default:
      return state
  }
}

export default reducer
