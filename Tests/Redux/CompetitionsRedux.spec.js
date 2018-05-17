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

describe('action creators', () => {

  it('should create an action to set collection', () => {

    const expectedAction = {
      type: ActionTypes.SET_COLLECTION,
      payload: competitions,
    }

    expect(ActionCreators.setCollection(competitions)).toEqual(expectedAction)

  })

})

describe('reducer', () => {

  describe('when there is no state', () => {

    it('should return initial state when action type is undefined', () => {
      expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('shoud return state with collection', () => {

      const expectedState = {
        collection: competitions,
      }

      const action = {
        type: ActionTypes.SET_COLLECTION,
        payload: competitions,
      }
      expect(reducer(undefined, action)).toEqual(expectedState)

    })

  })

  describe('when there is already a state', () => {

    const state = {
      collection: [],
      otherCollection: [],
    }

    it('should return the state when action type is undefined', () => {
      expect(reducer(state, {})).toEqual(state)
    })

    it('shoud return state with competitions', () => {

      const expectedState = {
        collection: competitions,
        otherCollection: [],
      }

      const action = {
        type: ActionTypes.SET_COLLECTION,
        payload: competitions,
      }
      expect(reducer(state, action)).toEqual(expectedState)

    })

  })


})
