import React, { Component } from 'react';
import { Text, TextInput, View, FlatList } from 'react-native';
import Person from './Person'
import people from '../mock/people.json'

export default class PeopleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      people: people
    };
  }

  handleChange(i) {
    const id = i.key
    let updatePeople = this.state.people.map(person => {
      if(person.key === id) {
        person.present = !person.present
      }
    })
    this.setState({
      people: updatePeople
    })
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <FlatList
          data={people['people']}
          renderItem={({item}) => <Person person={item}/>}
        />
        {/* onChange={(i) => this.handleChange(i)} */}
      </View>
    );
  }
}