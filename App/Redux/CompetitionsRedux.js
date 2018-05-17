// Initial state

export const initialState = {
  collection: []
}

// Action Types

const SET_COLLECTION = 'SET_COLLECTION'

export const ActionTypes = {
  SET_COLLECTION,
}

// Action Creators

const setCollection = (collection) => {
  return ({
    type: SET_COLLECTION,
    payload: collection,
  })
}

export const ActionCreators = {
  setCollection,
}

// Selectors

const getCollection = (state) => {
  return state.competitions.collection
}

export const Selectors = {
  getCollection,
}

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLLECTION:
      return {
        ...state,
        ...{
          collection: action.payload,
        },
      }
    default:
      return state
  }
}

export default reducer
