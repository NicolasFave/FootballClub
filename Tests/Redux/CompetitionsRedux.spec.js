import reducer, {
  ActionCreators,
  ActionTypes,
  initialState,
} from '../../App/Redux/CompetitionsRedux'

const competitions = [{
  key: '447',
  caption: 'League One',
}, {
  key: '448',
  caption: 'League Two',
}]

const error = {
  status: 500,
  data: 'This is an error message',
}

describe('action creators', () => {

  it('should create an action for competitions request', () => {

    const expectedAction = {
      type: ActionTypes.COMPETITIONS_REQUEST,
    }

    expect(ActionCreators.competitionsRequest()).toEqual(expectedAction)

  })

  it('should create an action for competitions successful fetching', () => {

    const expectedAction = {
      type: ActionTypes.COMPETITIONS_SUCCESS,
      payload: competitions,
    }

    expect(ActionCreators.competitionsSuccess(competitions)).toEqual(expectedAction)

  })

  it('should create an action for competitions fetching error', () => {

    const expectedAction = {
      type: ActionTypes.COMPETITIONS_ERROR,
      payload: error,
    }

    expect(ActionCreators.competitionsError(error)).toEqual(expectedAction)

  })

})

describe('reducer', () => {

  describe('when there is no state', () => {

    it('should return initial state when action type is undefined', () => {
      expect(reducer(undefined, {})).toEqual(initialState)
    })

    describe('when calling competitions request action', () => {

      it('should set fetching flag for competitions', () => {

        const expectedState = {
          fetching: true,
          data: null,
          error: null,
        }

        const action = {
          type: ActionTypes.COMPETITIONS_REQUEST,
        }

        expect(reducer(undefined, action).collection).toEqual(expectedState)

      })

    })

    describe('when calling competitions successful fetch action', () => {

      it('should set fetched data in the store', () => {

        const expectedState = {
          fetching: false,
          data: competitions,
          error: null,
        }

        const action = {
          type: ActionTypes.COMPETITIONS_SUCCESS,
          payload: competitions,
        }

        expect(reducer(undefined, action).collection).toEqual(expectedState)

      })

    })

    describe('when calling competitions failure fetch action', () => {

      it('should set the fetching error in the store', () => {

        const expectedState = {
          fetching: false,
          data: null,
          error: error,
        }

        const action = {
          type: ActionTypes.COMPETITIONS_ERROR,
          payload: error,
        }

        expect(reducer(undefined, action).collection).toEqual(expectedState)

      })

    })

  })

  describe('when there is already a state', () => {

    // Existing state

    const state = {
      otherCollection: [],
      collection: {
        fetching: false,
        data: [],
        error: null,
      }
    }

    it('should return state when action type is undefined', () => {
      expect(reducer(state, {})).toEqual(state)
    })

    describe('when calling competitions request action', () => {

      it('should set fetching flag for competitions', () => {

        const expectedState = {
          fetching: true,
          data: null,
          error: null,
        }

        const action = {
          type: ActionTypes.COMPETITIONS_REQUEST,
        }
        expect(reducer(state, action).collection).toEqual(expectedState)

        // We should keep other properties in the state unchanged
        expect(reducer(state, action).otherCollection).toEqual(state.otherCollection)

      })

    })

    describe('when calling competitions successful fetch action', () => {

      it('should set fetched data in the store', () => {

        const expectedState = {
          fetching: false,
          data: competitions,
          error: null,
        }

        const action = {
          type: ActionTypes.COMPETITIONS_SUCCESS,
          payload: competitions,
        }

        expect(reducer(state, action).collection).toEqual(expectedState)

        // We should keep other properties in the state unchanged
        expect(reducer(state, action).otherCollection).toEqual(state.otherCollection)

      })

    })

    describe('when calling competitions failure fetch action', () => {

      it('should set the fetching error in the store', () => {

        const expectedState = {
          fetching: false,
          data: null,
          error,
        }

        const action = {
          type: ActionTypes.COMPETITIONS_ERROR,
          payload: error,
        }

        expect(reducer(state, action).collection).toEqual(expectedState)

        // We should keep other properties in the state unchanged
        expect(reducer(state, action).otherCollection).toEqual(state.otherCollection)

      })

    })

  })

})
