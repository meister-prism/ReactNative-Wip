import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class TestScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>This is TestScreen</Text>
      </View>
    );
  }
}

export default TestScreen;