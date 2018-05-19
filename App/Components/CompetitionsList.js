import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'
import {
  Body,
  ListItem,
  Text,
  Right,
  Icon,
} from 'native-base'
import { sortBy } from 'lodash'

class CompetitionsList extends Component {

  static propTypes = {
    competitions: PropTypes.array.isRequired,
    onPress: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
      competitions: []
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.competitions) {
      return {
        competitions: sortBy(nextProps.competitions, ['caption'])
      }
    } else {
      return {
        competitions: []
      }
    }
  }

  _keyExtractor = (item, index) => `_${index}`

  _onPress = (id) => {
    if (this.props.onPress) {
      this.props.onPress(id)
    }
  }

  _renderEmpty = () => (
    <Text>Aucune donnée</Text>
  )

  _renderItem = (item) => {
    const {
      caption,
      id,
    } = item.item
    return (
      <ListItem
        noIndent
        onPress={() => this._onPress(id)}
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

  render() {
    const { competitions } = this.state
    return (
      <FlatList
        data={competitions}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
        ListEmptyComponent={this._renderEmpty}
      />
    )
  }
}

export default CompetitionsList
