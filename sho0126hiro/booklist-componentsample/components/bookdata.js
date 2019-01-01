// 本の詳細用コンポーネント

import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

var Dimensions = require('Dimensions');
var { width, height, scale } = Dimensions.get('window'); //get window size

var j_bookdata = require( "../assets/bookdata.json" );
var magintop = height*0.5*(1-(1/2.4));

export default class BookData extends React.Component {
  render() {
    let index = this.props.index;
    return (
      <View style={styles.container}>
        <View style={styles.bookdata}>
          <View style={styles.bookimg}>
            <Image style={styles.img} source={{uri: j_bookdata.books[index].url}}/>
          </View>
          <View style={{flex: 1}}>
            <View style={styles.bookInfo}>
              <Text>
                著者:{"\n"}{j_bookdata.books[index].author}{"\n"}
                タイトル：{"\n"}{j_bookdata.books[index].title}
              </Text>
            </View>
            <View style={styles.link}>
              <Text>
                リンク
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
    marginTop:magintop-1,
    height:height/2.4,
    justifyContent:'center',

  },
  bookdata:{
    flex: 1,
    flexDirection: 'row',

  },
  bookimg:{
    flex: 1, 
    backgroundColor: 'powderblue',
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
