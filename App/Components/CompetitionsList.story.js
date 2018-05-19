import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'

import CompetitionsList from './CompetitionsList';

const competitions = [{
  id: 447,
  caption: 'League One',
}, {
  id: 448,
  caption: 'League Two',
}, {
  id: 449,
  caption: 'League Three',
}, {
  id: 450,
  caption: 'Bundesliga',
}, {
  id: 451,
  caption: 'Ligue 1',
}]

storiesOf('CompetitionsList')
  .addDecorator(getStory => (
    <View style={{ backgroundColor: 'white' }}>
      {getStory()}
    </View>
  ))
  .add('Empty list', () => (
    <CompetitionsList competitions={[]} />
  ))
  .add('Default list', () => (
    <CompetitionsList
      competitions={competitions}
    />
  ))
  .add('Pressable list', () => (
    <CompetitionsList
      competitions={competitions}
      onPress={action('an item was pressed')}
    />
  ))

