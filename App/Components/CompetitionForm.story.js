import React from 'react'
import { View } from 'react-native'
import { Container, Content } from 'native-base'
import { storiesOf } from '@storybook/react-native'

import CompetitionForm from './CompetitionForm';

storiesOf('CompetitionForm')
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
    <CompetitionForm />
  ))
