import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextEntry from './src/components/TextEntry'
import PeopleList from './src/components/PeopleList'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PeopleList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
