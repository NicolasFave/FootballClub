import React from 'react'
import { View } from 'react-native'
import { Container, Content } from 'native-base'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { reducer as formReducer } from 'redux-form'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CompetitionForm from './CompetitionForm'

const store = createStore(formReducer)

storiesOf('CompetitionForm')
  .addDecorator(getStory => (
    <Provider store={store}>
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Container>
          <Content padder>
            {getStory()}
          </Content>
        </Container>
      </View>
    </Provider>
  ))
  .add('default', () => (
    <CompetitionForm
      onCancel={action('cancel was pressed')}
      onSubmit={action('submit was pressed')}
    />
  ))
