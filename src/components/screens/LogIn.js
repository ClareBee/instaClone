import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';

class LogIn extends Component {

  login(){
    this.props.navigation.navigate("main");
  }

  render(){
    return(
      <TouchableOpacity
        style={{height: 100 + "%", width: 100 + "%", flex: 1, justifyContent: "center", alignItems: "center"}}
        onPress={() => this.login()}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
    )
  }
}

export default LogIn;
