import { call, put, select } from 'redux-saga/effects'
import { NavigationActions } from 'react-navigation'

import {
  ActionCreators,
  Selectors,
} from '../Redux/CompetitionsRedux'

export function* getCompetitions(api) {
  const response = yield call(api.getCompetitions)
  if (response.ok) {
    yield put(ActionCreators.competitionsSuccess(response.data))
  } else {
    yield put(ActionCreators.competitionsError({
      status: response.status,
      error: response.data,
    }))
  }
}

export function* getDetails(action) {
  const { id } = action
  const competitions = yield select(Selectors.getCompetitions)
  const details = competitions.data.find((element) => (element.id === id))
  if (details) {
    yield put(ActionCreators.competitionDetailsSuccess(details))
    yield put(NavigationActions.navigate({
      routeName: 'CompetitionDetailsScreen',
      params: {
        title: details.caption
      }
    }))
  } else {
    yield put(ActionCreators.competitionDetailsError({
      status: 404,
      error: `could not find competition with id ${id}`
    }))
  }
}

export function* addCompetition(action) {
  const { payload: competition } = action
  yield put(ActionCreators.competitionAddSuccess(competition))
  yield put(NavigationActions.navigate({ routeName: 'CompetitionsScreen' }))
}
