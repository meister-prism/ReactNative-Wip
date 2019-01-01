import * as React from 'react';
import {Modal, Text, TouchableHighlight, View, Alert,StyleSheet,Image} from 'react-native';
import { Card } from 'react-native-paper';

import BookData from '../components/bookdata';
import BookData_Mini from './bookList-data';

// jsonデータ取得
let j_bookdata  = require( "../assets/bookdata.json" );

// windowの高さ、幅等を取得する
var Dimensions = require('Dimensions');
var { width, height, scale } = Dimensions.get('window'); //get window size

// bookListコンポーネント(一覧に表示する本12冊の画像を表示させる。）
// どこかをクリックすると、さらに追加表示できるといいな
export default class BookList extends React.Component {
  state = {
    modalVisible: false,
    modal_index :0,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  
  setModalIndex(num){
    this.setState({modal_index:num});
  }
  render() {
    // 表示物整形
    var displaydata = [];
    for (let i = 0; i <j_bookdata.books.length; i++) {
      if(i>19)break;
      displaydata.push(
        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          >
          <View style={styles.modalContainer}>
            <View>
              <BookData index={this.state.modal_index}/>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={styles.hidebutton}>Close</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      );
      displaydata.push(
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
            this.setModalIndex(i);
          }}>
          <BookData_Mini index={i}/>
        </TouchableHighlight>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.parent}>        
          {displaydata}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor:'blue',
  },
  parent:{
    flexDirection:'row',
    flexWrap:'wrap',
  },
  modalContainer:{
    marginTop: 22,
  },
  hidebutton:{
    fontSize:30
  },
});
