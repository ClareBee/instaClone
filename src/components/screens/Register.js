import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        login: "",
        password: ""
      }
    };
  }

  updateText(text, field){
    let newCredentials = Object.assign(this.state.credentials);
    newCredentials[field] = text;
    this.setState({
      credentials: newCredentials
    });
  }

  register(){
    // send credentials to server
    alert(JSON.stringify(this.state.credentials))
  }
  render() {
    return (
      <View
        style={styles.view}
        onPress={() => this.register()}>
        <Text>Register</Text>
        <TextInput
          value={this.state.login}
          onChangeText={text => this.updateText(text, "login")}
          placeholder="Username"
          autoCorrect={false}
          style={styles.input}/>
        <TextInput
          secureTextEntry
          value={this.state.password}
          onChangeText={text => this.updateText(text, "password")}
          placeholder="Password"
          autoCorrect={false}
          style={styles.input}/>
        <Button
          onPress={() => this.register()}
          title="Sign up"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    height: 100 + "%",
    width: 100 + "%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(200, 200, 200)"
  },
  input: {
    height: 50,
    width: 100 + "%",
    paddingHorizontal: 20,
    backgroundColor: "rgb(255, 255, 255)"
  }
})
export default Register;
