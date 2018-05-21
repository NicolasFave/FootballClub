import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import {
  Button,
  Content,
  Footer,
  FooterTab,
  Spinner,
  Text,
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

  _openDetail = (id) => {
    this.props.loadCompetitionDetail(id)
  }

  _addCompetition = () => {
    this.props.addCompetition()
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
      return [
        <Content padder key="content">
          <CompetitionsList
            competitions={competitions.data}
            onPress={this._openDetail}
          />
        </Content>,
        <Footer key="footer">
          <FooterTab>
            <Button
              block
              onPress={this._addCompetition}
            >
              <Text>Nouvelle compétition</Text>
            </Button>
          </FooterTab>
        </Footer>
      ]
    } else {
      return null
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadCompetitions: () => dispatch(CompetitionsActionCreators.competitionsRequest()),
  loadCompetitionDetail: (id) => dispatch(CompetitionsActionCreators.competitionDetailsRequest(id)),
  addCompetition: () => dispatch(NavigationActions.navigate({ routeName: 'AddCompetitionScreen' })),
})

const mapStateToProps = (state) => ({
  competitions: CompetitionsSelectors.getCompetitions(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionsScreen)
