import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Body,
  Text,
  Card,
  CardItem,
} from 'native-base'

class CompetitionDetails extends Component {

  static propTypes = {
    competition: PropTypes.object.isRequired,
  }

  render() {
    const { competition } = this.props
    return (
      <Card>
        <CardItem>
          <Body>
            <Text style={{ fontWeight: 'bold' }}>{competition.caption}</Text>
            <Text>{competition.numberOfTeams} équipes</Text>
          </Body>
        </CardItem>
      </Card>
    )
  }
}

export default CompetitionDetails
