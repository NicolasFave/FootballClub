import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Content,
  Spinner,
} from 'native-base'

import CompetitionDetails from '../Components/CompetitionDetails'
import { Selectors as CompetitionsSelectors } from '../Redux/CompetitionsRedux'

class CompetitionDetailsScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
  })

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

const mapStateToProps = (state) => ({
  competition: CompetitionsSelectors.getDetails(state),
})

export default connect(mapStateToProps, null)(CompetitionDetailsScreen)
