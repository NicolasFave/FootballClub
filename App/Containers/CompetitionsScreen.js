import React, { Component } from 'react'
import { Content } from 'native-base'

import CompetitionsList from '../Components/CompetitionsList'

const competitionsMock = [{
  id: 447,
  caption: 'League One',
}, {
  id: 448,
  caption: 'League Two',
}, {
  id: 449,
  caption: 'League Three',
}, {
  id: 450,
  caption: 'Bundesliga',
}, {
  id: 451,
  caption: 'Ligue 1',
}]

class CompetitionsScreen extends Component {

  render() {
    return (
      <Content padder>
        <CompetitionsList
          competitions={competitionsMock}
        />
      </Content>
    )
  }
}

export default CompetitionsScreen
