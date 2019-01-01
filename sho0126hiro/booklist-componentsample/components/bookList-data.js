import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

// jsonデータ取得
let j_bookdata  = require( "../assets/bookdata.json" );

// windowの高さ、幅等を取得する
var Dimensions = require('Dimensions');
var { width, height, scale } = Dimensions.get('window'); //get window size

// 本棚一覧で表示される一冊分のデータ
export default class BookData_Mini extends React.Component {
  render() {
    let index = this.props.index;
    let imgPath = j_bookdata.books[index].url;
    let title = j_bookdata.books[index].title;
    let author = j_bookdata.books[index].author;
    //console.log(index);
    if(index > j_bookdata.books.length){
      console.log("hehe");
      return (
        <View style={styles.container}>
          <View style = {styles.minidata}>
            <Image style={styles.img}/>
            <Text style = {styles.title}>
            </Text>
            <Text style = {styles.author}>
            </Text>
          </View>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style = {styles.minidata}>
          <Image style={styles.img} source={{uri: imgPath}}/>
          <Text style = {styles.title}>
            {title}
          </Text>
          <Text style = {styles.author}>
            {author}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height:height/3.3,
  },
  minidata:{
    flex:1,
    width:width/4.2,
  },
  img:{
    flex:7,
    backgroundColor:'green',
    height : height,
    resizeMode : 'contain',
  },
  title:{
    flex:2.3,
    fontSize:15,
    paddingTop:5,
    backgroundColor:'red',
    textAlign: 'center',
  },
  author:{
    flex:1.2,
    fontSize:15,
    backgroundColor:'skyblue',
    textAlign: 'center',
  },
});
