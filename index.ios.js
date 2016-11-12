import React, {Component} from 'react';
var ReactNative = require('react-native');
var Main = require('./App/Components/Main')

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} = ReactNative;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  },
});

class Rondeh extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Rendezvous',
          component: Main
        }} />
    );
  }
};

AppRegistry.registerComponent('Rondeh', () => Rondeh);
