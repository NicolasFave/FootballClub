import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Content } from 'native-base'

import CompetitionsList from '../Components/CompetitionsList'
import {
  ActionCreators as CompetitionsActionCreators,
  Selectors as CompetitionsSelectors,
} from '../Redux/CompetitionsRedux'

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

  componentDidMount() {
    this.props.loadCompetitions()
  }

  render() {
    return (
      <Content padder>
        <CompetitionsList
          competitions={this.props.competitions}
        />
      </Content>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCompetitions: () => dispatch(CompetitionsActionCreators.setCollection(competitionsMock))
  }
}

const mapStateToProps = (state) => {
  return {
    competitions: CompetitionsSelectors.getCollection(state),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionsScreen)
