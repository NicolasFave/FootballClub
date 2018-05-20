import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Content } from 'native-base'
import { NavigationActions } from 'react-navigation'

import CompetitionForm from '../Components/CompetitionForm'

class AddCompetitionScreen extends Component {

  _onCancel = () => {
    this.props.back()
  }

  _onSubmit = (values) => {
  }

  render() {
    return (
      <Content padder>
        <CompetitionForm
          onCancel={this._onCancel}
          onSubmit={this._onSubmit}
        />
      </Content>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  back: () => dispatch(NavigationActions.back()),
})

export default connect(null, mapDispatchToProps)(AddCompetitionScreen)
