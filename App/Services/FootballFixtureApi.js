import competitions from '../Fixtures/competitions.json'

export default {
  getCompetitions: () => {
    return {
      ok: true,
      data: competitions,
    }
  },
}
