import React from 'react'
import { View } from 'react-native'
import { Container, Content } from 'native-base'
import { storiesOf } from '@storybook/react-native'

import CompetitionDetails from './CompetitionDetails'

const competition = {
  id: 447,
  caption: 'League One',
  numberOfTeams: 20,
}

storiesOf('CompetitionDetails')
  .addDecorator(getStory => (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <Container>
        <Content padder>
          {getStory()}
        </Content>
      </Container>
    </View>
  ))
  .add('default', () => (
    <CompetitionDetails competition={competition} />
  ))
