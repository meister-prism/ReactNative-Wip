import * as React from 'react';
import { Animated,Text, View, StyleSheet, Image, Alert} from 'react-native';
import TimerMixin from 'react-timer-mixin';
import { createStackNavigator, createAppContainer } from "react-navigation";

import LoginScreen from './LoginScreen';

class LogoTitle extends React.Component {
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
    },3000);
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

/*
const Navigator = createStackNavigator(
  {
    Home : LogoTitle,
    Details: LoginScreen
  },
  {
    initialRouteName:"Home"
  }
);*/

const RootStack = createStackNavigator(
  {
    Home: LogoTitle,
    Details: LoginScreen,
  },
  {
    initialRouteName: 'Home',
  }
);
// export default createAppContainer(RootStack);
/*
export default class TopLogoTitle extends React.Component{
  render(){
    return <RootStack />;
  }
}*/

const AppContainer = createAppContainer(RootStack);

export default class Main extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 24,
  },
  logo: {
    height: 200,
    resizeMode : 'contain',
    marginBottom : 20,
  },
  text: {
    /*1753 x 4424 */
    height:160,
    resizeMode : 'contain',
    marginTop : 0,
    marginBottom : 70
  }
});