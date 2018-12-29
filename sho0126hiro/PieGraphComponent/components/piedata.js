import React from 'react';
import { StyleSheet, Text, View ,Dimensions,AppRegistry } from 'react-native';

var Dimensions1 = require('Dimensions');
var { width, height, scale } = Dimensions.get('window'); //get window size

import PieGraph from './pieGraph';
const data={
  "complete":70
};
// 円グラフ＋テキストの表示
export default class PieGraphData extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.bookdata}>
            <View style={styles.bookimg}>
              <PieGraph cmp={data.complete}/>
            </View>
            <View style={{flex: 1}}>
              <View style={styles.bookInfo}>
                <Text>
                  {data.complete}%　読了
                </Text>
              </View>
              <View style={styles.link}>
                <Text>
                  あいうえお
                </Text>
              </View>
            </View>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container:{
    height:height/4,
    justifyContent:'center',

  },
  bookdata:{
    flex: 1,
    flexDirection: 'row',
    
  },
  bookimg:{
    flex: 1,
    height:height/4, 
    backgroundColor: 'powderblue',
    justifyContent:'center',
    alignItems: 'center',
  },
  img:{
    height: height/2.4,
    resizeMode : 'contain',
  },
  bookInfo:{
    flex: 1,
    backgroundColor: 'lightgreen',
    fontSize: 20,
  },
  link:{
    flex: 1, 
    backgroundColor: 'steelblue'
  }
});