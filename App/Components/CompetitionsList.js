import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'
import {
  Button,
  Text,
} from 'native-base'
import { sortBy } from 'lodash'
import CompetitionItem from './CompetitionItem';

class CompetitionsList extends Component {

  static propTypes = {
    competitions: PropTypes.array.isRequired,
    onPress: PropTypes.func,
    onAdd: PropTypes.func,
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
    return (
      <CompetitionItem
        competition={item.item}
        onPress={this.props.onPress}
      />
    )
  }

  _renderFooter = () => {
    return (
      this.props.onAdd ?
        <Button
          block
          onPress={this.props.onAdd}
        >
          <Text>Nouvelle compétition</Text>
        </Button>
        : null
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
        ListFooterComponent={this._renderFooter}
      />
    )
  }
}

export default CompetitionsList
