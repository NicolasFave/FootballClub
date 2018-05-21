import { takeLatest, all } from 'redux-saga/effects'
import FootballApi from '../Services/FootballApi'
import FootballFixturesApi from '../Services/FootballFixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { ActionTypes as CompetitionsActionTypes } from '../Redux/CompetitionsRedux'

/* ------------- Sagas ------------- */

import {
  addCompetition,
  getCompetitions,
  getDetails,
} from './CompetitionsSagas'

/* ------------- API ------------- */

const footballApi = DebugConfig.useFixtures ? FootballFixturesApi : FootballApi.create()

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    takeLatest(CompetitionsActionTypes.COMPETITIONS_REQUEST, getCompetitions, footballApi),
    takeLatest(CompetitionsActionTypes.COMPETITION_DETAILS_REQUEST, getDetails),
    takeLatest(CompetitionsActionTypes.COMPETITION_ADD_REQUEST, addCompetition),
  ])
}
