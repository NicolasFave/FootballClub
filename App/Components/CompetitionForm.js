import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Content,
  Form,
  Icon,
  Input,
  Item,
  Label,
  Text,
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
    keyboardType,
    meta: { touched, error, warning }
  }) => {

    let hasError = false
    if (touched && error !== undefined) {
      hasError = true
    }

    return (
      <Content>
        <Item
          floatingLabel
          error={hasError}
        >
          <Label>{label}</Label>
          <Input
            {...input}
            keyboardType={keyboardType}
          />
          {
            /*
            BUG !!!
            hasError &&
            <Icon name="close-circle" />
            */
          }
        </Item>
        {
          hasError &&
          <Text style={{ color: 'red' }}>{error}</Text>
        }
      </Content>
    )
  }

  render() {
    return (
      <Form>
        <Field
          name="id"
          component={this._renderInput}
          label="id"
          keyboardType="numeric"
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
          keyboardType="numeric"
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

const validate = (values) => {
  const errors = {}
  if (!values.id) {
    errors.id = 'veuillez saisir un id'
  }
  if (!values.caption) {
    errors.caption = 'veuillez saisir un nom'
  }
  if (!values.numberOfTeams) {
    errors.numberOfTeams = 'veuillez saisir un nombre d\'équipes'
  }
  return errors
}

export default reduxForm({
  form: 'competition',
  validate,
})(CompetitionForm)
