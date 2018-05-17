import { call, put } from 'redux-saga/effects'

import { ActionCreators } from '../Redux/CompetitionsRedux'

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
