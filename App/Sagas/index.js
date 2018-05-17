import { takeLatest, all } from 'redux-saga/effects'
import FootballAPI from '../Services/FootballApi'

/* ------------- Types ------------- */

import { ActionTypes as CompetitionsActionTypes } from '../Redux/CompetitionsRedux'

/* ------------- Sagas ------------- */

import { getCompetitions } from './CompetitionsSagas'

/* ------------- API ------------- */

const footballApi = FootballAPI.create()

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    takeLatest(CompetitionsActionTypes.COMPETITIONS_REQUEST, getCompetitions, footballApi),
  ])
}
