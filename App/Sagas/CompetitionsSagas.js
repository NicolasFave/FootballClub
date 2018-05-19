import { call, put, select } from 'redux-saga/effects'

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
  } else {
    yield put(ActionCreators.competitionDetailsError({
      status: 404,
      error: `could not find competition with id ${id}`
    }))
  }
}
