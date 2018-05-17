import nock from 'nock'
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'

import Api from '../../App/Services/FootballApi'

axios.defaults.adapter = httpAdapter // Timeout error if no default adapter is not set

describe('getCompetitions', () => {

  describe('when fetch is successful', () => {

    const mockData = ['Ligue 1', 'Ligue 2', 'National']

    beforeEach(() => {
      nock(/.*/)
        .get('/v1/competitions')
        .reply(200, mockData)
    })

    afterEach(() => {
      nock.cleanAll()
    })

    it('should return a resolved promise with a list of competitions', () => {
      const api = Api.create()
      return api.getCompetitions()
        .then((response) => {
          expect(response).toEqual({
            ok: true,
            status: 200,
            data: mockData,
          })
        })
        .catch((err) => {
          fail()
        })
    })

  })

  describe('when fetch fails', () => {

    const mockError = {
      message: 'This is an error',
    }

    beforeEach(() => {
      nock(/.*/)
        .get('/v1/competitions')
        .reply(500, mockError)
    })

    afterEach(() => {
      nock.cleanAll()
    })

    it('should return a rejected promise with the error', () => {
      const api = Api.create()
      return api.getCompetitions()
        .then((response) => {
          expect(response).toEqual({
            ok: false,
            status: 500,
            data: mockError,
          })
        })
        .catch((err) => {
          fail()
        })
    })

  })

})
