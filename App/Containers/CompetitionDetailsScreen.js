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

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
  })


  componentWillMount() {
    this.props.navigation.setParams({ title: 'chargement en cours ...' })
  }

  componentDidMount() {
    const { params } = this.props.navigation.state
    this.props.loadCompetition(params.id)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.competition !== nextProps.competition) {
      const { competition } = nextProps
      if (competition) {
        if (competition.fetching) {
          this.props.navigation.setParams({ title: 'chargement en cours ...' })
        } else {
          this.props.navigation.setParams({ title: competition.data.caption })
        }
      }
    }
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
