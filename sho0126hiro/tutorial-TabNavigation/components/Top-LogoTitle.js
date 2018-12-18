import * as React from 'react';
import { Animated,Text, View, StyleSheet, Image, Alert} from 'react-native';
import TimerMixin from 'react-timer-mixin';
import { createBottomTabNavigator,createAppContainer } from 'react-navigation';

import LoginScreen from './LoginScreen';
import TestScreen from './TestScreen';
import TestScreen2 from './TestScreen2';

class WelcomeScreen extends React.Component{
  // animation state
  state = {
    animation : new Animated.Value(0),
  }
  // コンポーネントが表示された直後に呼び出されるイベント
  componentDidMount(){
    Animated.timing(
      this.state.animation,
      {toValue:1,duration:1000,}
    ).start()
    setTimeout(()=>{
      Animated.timing(
        this.state.animation,
        {toValue:0,duration:1000,}
      ).start()
      this.props.navigation.navigate('Details')
    },2000);
  }
  render() {
    let {animation}=this.state;
    return (
      <View style={styles.container}>
        <Animated.View style={{opacity:animation,}}>
        <Image style={styles.logo} source={require('../assets/SHIWORIロゴ.png')} />
        </Animated.View>
        <Animated.View style={{opacity:animation,}}>
        <Image style={styles.text} source={require('../assets/SHIWORI文字.png')} />
        </Animated.View>
      </View>
    );
  }
}

const root = createBottomTabNavigator({
  LoginScreen: { screen: LoginScreen },
  WelcomeScreen: { screen: WelcomeScreen },
  Test  : { screen:TestScreen},
  Test2  : { screen:TestScreen2},
});

export default class App extends React.Component {
  render() {
    const NavigatorTab = createBottomTabNavigator({
      welcome: { screen: WelcomeScreen },
      main : createBottomTabNavigator({
          LoginScreen  : { screen:LoginScreen},
          Test  : { screen:TestScreen},
          Test2  : { screen:TestScreen2},
        })
    });
    return(
      <View style={styles.container}>
        <NavigatorTab />
      </View>
    );
  }
}
const AppContainer = createAppContainer(root);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // ↓この文消さないと`react-navigation`が上手く動かず、画面真っ白になっちゃう
    // alignItems: 'center',
    justifyContent: 'center',
  },
});