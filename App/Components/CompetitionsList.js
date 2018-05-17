import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'
import {
  Body,
  ListItem,
  Text,
} from 'native-base'
import { sortBy } from 'lodash'

class CompetitionsList extends Component {

  static propTypes = {
    competitions: PropTypes.array.isRequired,
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

  _renderEmpty = () => (
    <Text>Aucune donnée</Text>
  )

  _renderItem = (item) => {
    const {
      caption,
    } = item.item
    return (
      <ListItem>
        <Body>
          <Text>{caption}</Text>
        </Body>
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
