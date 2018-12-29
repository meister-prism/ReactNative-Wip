import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';
import BarGraph from './components/barGraph';
import LineGraph from './components/lineGraph';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <BarGraph />
        {/*<LineGraph />*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});