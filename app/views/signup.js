import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
   Button,
   TouchableHighlight,
   TouchableOpacity,
   Image,
   Alert,
} from 'react-native';


export default class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          username: "",
          email: "",
          password: ""
        };
      }
      
      onClickListener = (viewId) => {
       // Alert.alert("Alert", "Button pressed "+viewId);
       Alert.alert("Alert", "SignUp Button click");
      }
 	render() {
		return(
			<View style={styles.container}>
				<View style={styles.mainConatiner}>
          <View style={styles.inContainer}>
            <View style = {styles.iconContainer}>
                <Image style={styles.icon} source={require("../icons/icons-user-male-50.png")} />
            </View>
            <TextInput style={styles.input}
                  placeholder="username"
                  value = {this.state.username}
                  keyboardType="username"
                  underlineColorAndroid='transparent'
                  onChangeText={(username) => this.setState({username})}/>
          </View>

          <View style={styles.inContainer}>
            <View style = {styles.iconContainer}>
                <Image style={styles.icon} source={require("../icons/email.png")} />
            </View>
            <TextInput style={styles.input}
                  placeholder="Email"
                  keyboardType="email-address"
                  value = {this.state.email}
                  underlineColorAndroid='transparent'
                  onChangeText={(email) => this.setState({email})}/>
          </View>
                    
          <View style={styles.inContainer}>
            <View style = {styles.iconContainer}>
                <Image style={styles.icon} source={require("../icons/icons-key-50.png")} />
            </View>
            <TextInput style={styles.input}
                  placeholder="Password"
                  secureTextEntry={true}
                  underlineColorAndroid='transparent'
                  value = {this.state.password}
                  onChangeText={(password) => this.setState({password})}/>
          </View>

          <TouchableOpacity style={styles.button} onPress={() => this.onClickListener('signup')}>
              <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
           
        </View>
        <View style={styles.container}>
          <View style = {styles.loginWrapper}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('login')}>
              <View>
                <Text style={styles.loginlinkText}> Login</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      )
    }
  }

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#F5F7F6',
    flex: 1,  
  },
  mainConatiner: {
    flex: 2,
    paddingHorizontal: 20,
    marginTop: 0,
    //alignItems: 'center',
    justifyContent: 'center',
  },
  inContainer: {
    borderBottomColor: '#A0A3A9',
    backgroundColor: '#FFFFFF',
    borderRadius:10,
    borderBottomWidth: 1,
    //width:250,
    height:45,
    marginVertical: 5,
    flexDirection: 'row',
    //alignItems:'center',  
    color: '#000' 
  },
  iconContainer: {
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon:{
    width:25,
    height:25,
   // marginLeft:5,   
    //justifyContent: 'center',
  },
  input:{
    flex: 1,  
    paddingHorizontal: 15,
    //height:45,
    borderBottomColor: '#FFFFFF',
  },
  button:{
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:1,
    //width:250,
    borderRadius:5,    
    borderColor: "#3160CC",
    marginTop: 30,
    //paddingVertical: 20,
    backgroundColor: "#3160CC",
  },
  buttonText:{
    color: '#FFF',
    fontSize:18,
    fontWeight:'500',
  },
  loginWrapper:{
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical:20,
  },
  loginText: {
  	color:'#000',
    fontSize:16,    
  },
  loginlinkText: {
  	fontSize:16,
    fontWeight:'500',
    color:'#3160CC',
  }
});