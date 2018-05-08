import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import config from '../../config';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        email: "",
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
    alert(JSON.stringify(this.state.credentials));
    this.props.navigation.navigate('main')
    // fetch(config.baseURL + 'signup', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(this.state.credentials)
    // })
    // .then(response => response.json())
    // .then(data => {
    //   if(data.confirmation==="success"){
    //     this.props.navigation.navigate("main")
    //   } else {
    //     throw new Error({ message: 'sorry, something went wrong'})
    //   }
    // }).catch(err => {
    //   alert(err.message)
    // });
  }

  render() {
    return (
      <View
        style={styles.view}>
        <Text>Register</Text>
        <TextInput
          value={this.state.email}
          onChangeText={text => this.updateText(text, "email")}
          placeholder="Email"
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
