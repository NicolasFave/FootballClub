import { runSaga } from 'redux-saga'
import {
  getCompetitions,
  getDetails,
} from '../../App/Sagas/CompetitionsSagas'
import { ActionCreators } from '../../App/Redux/CompetitionsRedux'

describe('Saga getCompetitions', () => {

  describe('competitions fetch was successful', () => {

    // Mock API

    const data = ['Ligue 1', 'Ligue 2', 'National']
    const api = {
      getCompetitions: () => {
        return {
          ok: true,
          data
        }
      }
    }

    test('it should dispatch the right actions', () => {

      // Call the saga

      const dispatched = []
      const sagaConfig = {
        dispatch: (action) => dispatched.push(action)
      }
      const saga = runSaga(sagaConfig, getCompetitions, api).done

      // Check the dispatched actions

      expect(dispatched).toEqual([
        ActionCreators.competitionsSuccess(data)
      ])
    })

  })

  describe('competitions fetch failed', () => {

    // Mock API
    const data = 'This is an error'
    const api = {
      getCompetitions: () => {
        return {
          ok: false,
          status: 500,
          data,
        }
      }
    }

    test('it should dispatch the right actions', () => {

      // Call the saga
      const dispatched = []
      const sagaConfig = {
        dispatch: (action) => dispatched.push(action)
      }
      const saga = runSaga(sagaConfig, getCompetitions, api).done

      // Check the dispatched actions
      expect(dispatched).toEqual([
        ActionCreators.competitionsError({
          status: 500,
          error: data,
        })
      ])
    })

  })

})

describe('Saga getDetails', () => {

  const competitions = [{
    id: 447,
    caption: 'League One',
  }, {
    id: 448,
    caption: 'League Two',
  }]

  const state = {
    competitions: {
      collection: {
        fetching: false,
        data: competitions,
        error: null,
      }
    }
  }

  describe('when fetch was successful', () => {

    test('it should dispatch the right actions', () => {
      const dispatched = []
      const sagaConfig = {
        dispatch: (action) => dispatched.push(action),
        getState: () => state,
      }
      const saga = runSaga(sagaConfig, getDetails, { id: 447 }).done

      // Check the dispatched actions

      expect(dispatched).toEqual([
        ActionCreators.competitionDetailsSuccess(competitions[0])
      ])

    })
  })

  describe('when fetch failed', () => {

    test('it should dispatch the right actions', () => {
      const dispatched = []
      const sagaConfig = {
        dispatch: (action) => dispatched.push(action),
        getState: () => state,
      }
      const saga = runSaga(sagaConfig, getDetails, { id: 500 }).done

      // Check the dispatched actions

      expect(dispatched).toEqual([
        ActionCreators.competitionDetailsError({
          status: 404,
          error: 'could not find competition with id 500'
        })
      ])
    })
  })

})
