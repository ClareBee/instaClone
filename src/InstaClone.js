import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { MainFeed, LogIn, Camera, Profile, Register } from './components/screens';
import { createSwitchNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

const Tabs = createBottomTabNavigator({
  feed: MainFeed,
  camera: Camera,
  profile: Profile
});

const IntroStack = createStackNavigator({
  register: Register,
  login: LogIn
});

const MainStack = createSwitchNavigator({
  intro: IntroStack,
  main: Tabs
});

class InstaClone extends Component {

  render () {
    return (
      <MainStack />
    );
  }
}


export default InstaClone;
