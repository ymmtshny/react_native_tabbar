import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SearchTab extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>This is SearchTab Tab !!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 15,
    backgroundColor: '#FFFFFF'
  }
});
