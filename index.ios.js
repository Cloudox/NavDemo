/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  ListView,
  View,
  Text,
  Image,
  NavigatorIOS,
  TouchableHighlight,
} from 'react-native';

class NavDemo extends Component {
  onRightButtonPress = () => {
    this.refs.nav.push({
      title: 'From Right',
      component: ForRightScene
    })
  }

  render() {
    return (
      <NavigatorIOS 
        ref="nav"
        style={styles.container}
        initialRoute={{
          component: HomeScene,
          title: 'NavigatorIOS Demo',
          rightButtonTitle: 'MORE!',
          onRightButtonPress: this.onRightButtonPress
        }} />
    );
  }
}

class HomeScene extends Component {
  
  onPress = () =>  {
    this.props.navigator.push({
      title: 'From TouchableHighlight',
      component: ForTouchScene
    });
  }

  render() {
    return (
      <View style={[styles.scene, {backgroundColor: '#DAF6FF'}]}>
        <TouchableHighlight onPress={this.onPress}>
          <Text> Welcome to the NavigatorIOS Demo. Press here!</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

class ForRightScene extends Component {
  render() {
    return (
      <View style={[styles.scene, {backgroundColor: '#FFF1E8'}]}>
        <Text>You came here from the "right" button!</Text>
      </View>
    );
  }
}

class ForTouchScene extends Component {
  render() {
    return (
      <View style={[styles.scene, {backgroundColor: '#ECF6E8'}]}>
        <Text>You came here from the TouchableHighlight!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    padding: 10,
    paddingTop: 74,
    flex: 1,
  },
});

AppRegistry.registerComponent('NavDemo', () => NavDemo);
