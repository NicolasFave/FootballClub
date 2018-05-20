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

class CompetitionForm extends Component {

  static propTypes = {
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }

  render() {
    return (
      <Form>
        <Item floatingLabel>
          <Label>id</Label>
          <Input />
        </Item>
        <Item floatingLabel>
          <Label>nom</Label>
          <Input />
        </Item>
        <Item floatingLabel last>
          <Label>nombre d'équipes</Label>
          <Input />
        </Item>
        <Content padder>
          <Button
            block
            onPress={this.props.onSubmit}
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

export default CompetitionForm
