import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Content,
  Spinner,
} from 'native-base'

import CompetitionsList from '../Components/CompetitionsList'
import {
  ActionCreators as CompetitionsActionCreators,
  Selectors as CompetitionsSelectors,
} from '../Redux/CompetitionsRedux'

class CompetitionsScreen extends Component {

  componentDidMount() {
    this.props.loadCompetitions()
  }

  render() {
    const { competitions } = this.props
    if (competitions.fetching) {
      return (
        <Content>
          <Spinner color="red" />
        </Content>
      )
    } else if (competitions.data) {
      return (
        <Content padder>
          <CompetitionsList
            competitions={competitions.data}
          />
        </Content>
      )
    } else {
      return null
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadCompetitions: () => dispatch(CompetitionsActionCreators.competitionsRequest())
})

const mapStateToProps = (state) => ({
  competitions: CompetitionsSelectors.getCompetitions(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionsScreen)
