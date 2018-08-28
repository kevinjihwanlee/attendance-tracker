import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';

export default class Person extends Component {
  constructor(props) {
    super(props)
    this.state = {
      switchValue: this.props.person.present
    }
  }

  handleChange = (val) => {
    this.setState({
      switchValue: val
    })
  }

  render() {
    return (
      <View>
        <Text>{this.props.person.name}</Text>
        <Switch value={this.state.switchValue} onValueChange={this.handleChange}/>
      </View>
    )
  }
}