import React from 'react';

import {
  StyleSheet,
  View,
Image,
Text,
} from 'react-native';

import { createStackNavigator ,createAppContainer} from 'react-navigation';

import signup from './app/views/signup';
import login from './app/views/login';

const RootStack = createStackNavigator(
  {
    login: login,
    signup: signup,
  },
  {
    initialRouteName: 'login',
    headerMode:"none",
    navigationOptions: {
      headerVisible: false,
  }
  }
)

const Application = createAppContainer(RootStack)

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}> 
        <View style={styles.logoContainer}>
          <Text style={styles.subtext}>BOOKIT</Text>
        </View>
        <Application/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#F5F7F6',
    flex:1
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow:0.5,
    marginBottom: 0,
  },
  subtext: {
    color: "#000",
    width: 160,
    textAlign: "center",
    opacity: 0.8,
    marginTop:5,
  },
});