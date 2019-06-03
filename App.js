import React from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';


import { createStackNavigator ,createAppContainer} from 'react-navigation';

import signup from './app/views/signup';
import login from './app/views/login';
import home from './app/views/home';

const RootStack = createStackNavigator(
  {
    login: login,
    signup: signup,
    home: home,
  },
  {
    initialRouteName: 'home',
    headerMode:"none",
    navigationOptions: {
      headerVisible: true,
  }
  }
)

const Application = createAppContainer(RootStack)

export default class App extends React.Component {
  clickHandler = () => {
    //function to handle click on floating Action Button
    Alert.alert('Floating Button Clicked');
  };
 
  render() {
    
    return (
      <View style={styles.container}>
      <Application/>
      {/* //floating buttons not working(opacity)
      
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={this.clickHandler}
        style={styles.TouchableOpacityStyle}>
        <Image
           source={{
            uri:'http://iconshow.me/media/images/ui/ios7-icons/png/512/plus-round.png',
          }}
          //source={require('./images/float-add-icon.png')}
          style={styles.FloatingButtonStyle}
        />        
      </TouchableOpacity> 
      
      */}
    </View>

    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F7F6',
  },
 
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
 
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
  container : {
    backgroundColor: '#F5F7F6',
    flex:1
  },
  
});