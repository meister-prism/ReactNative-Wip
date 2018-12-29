import * as React from 'react';
import { StyleSheet, Text, View ,Dimensions} from 'react-native';
import { Constants } from 'expo';
import PieGraphData from './components/piedata';
const { width,height } = Dimensions.get('window')

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>papapa</Text>
      <PieGraphData />
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