import * as React from 'react';
import { Text, View, StyleSheet, Alert,TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import {StackNavigator} from 'react-navigation';

// You can import from local files
import LogoTitle from './components/Top-LogoTitle';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
   
  render() {
    return (
      <View style={styles.container} >
          <LogoTitle />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    padding: 8,
  },
});
