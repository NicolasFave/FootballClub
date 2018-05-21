import React from 'react'
import { View } from 'react-native'
import { Container, Content } from 'native-base'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'

import CompetitionForm from './CompetitionForm'
import { FormDecorator } from '../../storybook/FormDecorator'

storiesOf('CompetitionForm')
  .addDecorator(getStory => (
    <FormDecorator>
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Container>
          <Content padder>
            {getStory()}
          </Content>
        </Container>
      </View>
    </FormDecorator>
  ))
  .add('default', () => (
    <CompetitionForm
      onCancel={action('cancel was pressed')}
      onSubmit={action('submit was pressed')}
    />
  ))
