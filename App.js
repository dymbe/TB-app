import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import {Root, Container, Header, Left, Body, Right, Title, Content, Footer, FooterTab, Button, Text, Icon } from 'native-base';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import { createDrawerNavigator } from 'react-navigation'; // Version can be specified in package.json
import Expo from 'expo'

import CustomHeader from './components/CustomHeader';

import HomeScreen from './components/Home';
import CalendarScreen from './components/Calendar';
import VaskelisterScreen from './components/Vaskelister';
import KlesvaskScreen from './components/Klesvask';
import TurneringerScreen from './components/Turneringer';
import KortspillScreen from './components/Kortspill';

import DoorOpenerScreen from './components/DoorOpener';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    })
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Root>
        <AppStack />
      </Root>
    )
  }
}

const AppStack = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Calendar: {
    screen: CalendarScreen,
  },
  Vaskelister: {
    screen: VaskelisterScreen,
  },
}, {
  initialRouteName: 'Home',
  //Hide GODDAMN header that lies on top of drawer navigation
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
});


//STYLES
const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: '#F9A423',
    height: 85,
  },
  content: {
    flex: 1,
    backgroundColor: '#efefef',
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  navIconText: {
    fontSize: 8,
  },
  containerText: {
    color: '#fff',
  },
});
