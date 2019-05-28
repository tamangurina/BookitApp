import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TextInput,
   Button,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          email: "",
          fullname: "",
          password: ""
        };
     }
      
    onClickListener = (viewId) => {
       // Alert.alert("Alert", "Button pressed "+viewId);
       Alert.alert("Alert", "login Button click");
    }
    render() {
		 return(
			<View style={styles.container}>
				<View style={styles.wrapper}>  

            <View style={styles.inWrapper}>
              <View style = {styles.iconWrapper}>
                  <Image style={styles.icon} source={require("../icons/icons-user-male-50.png")}/>
              </View>
              <TextInput style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    value = {this.state.email}
                    underlineColorAndroid='transparent'
                    onChangeText={(email) => this.setState({email})}/>
            </View>

            <View style={styles.inWrapper}>
              <View style = {styles.iconWrapper}>
                  <Image style={styles.icon} source={require("../icons/icons-key-50.png")} />
              </View>    
              <TextInput style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    returnKeyType="go"
                    underlineColorAndroid='transparent'
                    value = {this.state.password}
                    onChangeText={(password) => this.setState({password})}/>
            </View>
            
           
            <TouchableOpacity style={styles.button} onPress={() => this.onClickListener('login')}>
              <Text style={styles.buttonText}>Login</Text>
             </TouchableOpacity>
           
        </View>

      
        
        <View style={styles.container}>
          <View style = {styles.signupWrapper}>
            <Text style={styles.signupText}>Don't have an account yet?</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('signup')}>
              <View>
                <Text style={styles.signuplinkText}> Signup</Text>
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
    flex:1,
    backgroundColor: '#F5F7F6',  
  },
  wrapper: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    //alignItems: 'center',
    justifyContent: 'center',
  },
  inWrapper: {
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
  iconWrapper: {
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
  signupWrapper:{
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical:20,
  },
  signupText: {
  	color:'#000',
    fontSize:16,    
  },
  signuplinkText: {
  	fontSize:16,
    fontWeight:'500',
    color:'#3160CC',
  }
});