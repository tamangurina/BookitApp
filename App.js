import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  SafeAreaView,
  } from 'react-native';
  
 import { createDrawerNavigator, DrawerItems, createAppContainer, createStackNavigator } from 'react-navigation';
 import { Image } from 'react-native-elements';

import CategoryScreen from './app/views/category';
import AboutScreen from './app/views/about'
import HomeScreen from './app/views/home';
import FAQsScreen from './app/views/faq';
import ContactusScreen from './app/views/contactUs';

export default class App extends React.Component {
  render() {
    return (   

     <View style={styles.container}>  
       <Apps />
      </View>
      
    );
  }
}


const CustomDrawerComponent = (props) => (
  <SafeAreaView style = {{ flex: 1 }}>
       <View
      style={{
        backgroundColor: '#fff',
        height: 140,
        color: '#0956a4',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor : '#0956a4'
        
      }}
    ><Text>PROFILE</Text></View>
      <DrawerItems {...props} />
  </SafeAreaView>
)

const AppDrawerNav = createDrawerNavigator({
  "Home " : HomeScreen,
  "Category " : CategoryScreen,
  "About ": AboutScreen,
  "FAQs" : FAQsScreen,
  "Contact us": ContactusScreen,
}, {
  contentComponent : CustomDrawerComponent,
  contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: "#0956a4",     


    },
});
const Apps = createAppContainer(AppDrawerNav)



const styles = StyleSheet.create({
  container : {
    backgroundColor: '#F5F7F6',
    flex:1
  },
});