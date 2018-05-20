import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Body,
  ListItem,
  Text,
  Right,
  Icon,
} from 'native-base'

class CompetitionItem extends Component {

  static propTypes = {
    competition: PropTypes.object.isRequired,
    onPress: PropTypes.func,
  }

  _onPress = () => {
    if (this.props.onPress) {
      this.props.onPress(this.props.competition.id)
    }
  }

  render() {
    const { caption } = this.props.competition
    return (
      <ListItem
        noIndent
        onPress={this._onPress}
      >
        <Body>
          <Text>{caption}</Text>
        </Body>
        {
          this.props.onPress &&
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        }
      </ListItem>
    )

  }

}

export default CompetitionItem
