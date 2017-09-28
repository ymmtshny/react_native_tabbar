import React, { Component } from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default class CategoryTab extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>This is CategoryTab Tab !!</Text>
      </View>
    )
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
