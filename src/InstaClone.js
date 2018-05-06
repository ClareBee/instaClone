import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class InstaClone extends Component {
  render () {
    return (
      <View style={{flex: 1, width: 100 + "%", height: 100 + "%"}}>
        <View style={styles.tempNav}>
          <Text>Instagram</Text>
        </View>
        <View style={styles.userBar}>

        </View>
      <Image
        style={{width: 100 + "%", height: 100 }}
        source={require("./img/cutedoggo.jpg")} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tempNav: {
    width: 100 + "%",
    height: 75,
    marginTop: 20,
    backgroundColor: "rgb(250, 250, 250)",
    borderBottomColor: "rgb(233, 233, 233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  userBar: {
    width: 100 + "%",
    height: 50,
    backgroundColor: "rgb(255, 255, 255)"
  }
});

export default InstaClone;
