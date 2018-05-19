import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Content,
  Spinner,
} from 'native-base'

import CompetitionDetails from '../Components/CompetitionDetails'
import {
  ActionCreators as CompetitionsActionCreators,
  Selectors as CompetitionsSelectors,
} from '../Redux/CompetitionsRedux'

class CompetitionDetailsScreen extends Component {

  componentDidMount() {
    const { params } = this.props.navigation.state
    this.props.loadCompetition(params.id)
  }

  render() {
    const { competition } = this.props
    if (competition.fetching) {
      return (
        <Content>
          <Spinner color="red" />
        </Content>
      )
    } else if (competition.data) {
      return (
        <Content padder>
          <CompetitionDetails
            competition={competition.data}
          />
        </Content>
      )
    } else {
      return null
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadCompetition: (id) => dispatch(CompetitionsActionCreators.competitionDetailsRequest(id))
  }
}

const mapStateToProps = (state) => ({
  competition: CompetitionsSelectors.getDetails(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionDetailsScreen)
