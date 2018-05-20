import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Form,
  Input,
  Item,
  Text,
  Label,
  Content,
} from 'native-base'
import {
  reduxForm,
  Field,
} from 'redux-form'

class CompetitionForm extends Component {

  static propTypes = {
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }

  _renderInput = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => {
    return (
      <Item
        floatingLabel
      >
        <Label>{label}</Label>
        <Input {...input} />
      </Item>
    )
  }
  render() {
    return (
      <Form>
        <Field
          name="id"
          component={this._renderInput}
          label="id"
        />
        <Field
          name="caption"
          component={this._renderInput}
          label="nom"
        />
        <Field
          name="numberOfTeams"
          component={this._renderInput}
          label="nombre d'équipes"
        />
        <Content padder>
          <Button
            block
            onPress={this.props.handleSubmit(this.props.onSubmit)}
          >
            <Text>Valider</Text>
          </Button>
        </Content>
        <Content padder>
          <Button
            block
            light
            onPress={this.props.onCancel}
          >
            <Text>Annuler</Text>
          </Button>
        </Content>
      </Form>
    )
  }
}

export default reduxForm({ form: 'competition' })(CompetitionForm)
