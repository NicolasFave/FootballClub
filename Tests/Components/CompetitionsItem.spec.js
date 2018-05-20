import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'

import CompetitionItem from '../../App/Components/CompetitionItem'

describe('CompetitionItem component', () => {

  test('onPress', () => {

    const competition = {
      id: 447,
      caption: 'League One',
    }

    let pressedId = null
    const onPress = (id) => {
      pressedId = id
    }
    const wrapper = shallow(
      <CompetitionItem
        competition={competition}
        onPress={onPress}
      />
    )

    wrapper.simulate('press')
    expect(pressedId).toBe(447)
  })

})
