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
  onRightButtonPress = () => {// 导航栏右边按钮的响应方法
    this.refs.nav.push({// 进入一个界面
      title: 'From Right', /* 导航栏标题 */
      component: ForRightScene /* 要进入的组件 */
    })
  }

  render() {
    return (
      <NavigatorIOS 
        ref="nav"
        style={styles.container}
        initialRoute={{
          component: HomeScene, /* 首页组件 */
          title: 'NavigatorIOS Demo', /* 导航栏标题 */
          rightButtonTitle: 'MORE!', /* 导航栏右侧按钮 */
          onRightButtonPress: this.onRightButtonPress /* 点击右侧按钮的响应 */
        }} />
    );
  }
}

class HomeScene extends Component {
  
  onPress = () =>  {// 点击方法
    this.props.navigator.push({ /* 进入一个界面 */
      title: 'From TouchableHighlight', /* 导航栏标题 */
      component: ForTouchScene /* 要进入的组件 */
    });
  }

  onSecondPress = () =>  {// 点击方法
    this.props.navigator.push({ /* 进入一个界面 */
      title: 'My Component', /* 导航栏标题 */
      component: MyComponent /* 要进入的组件 */
    });
  }

  render() {
    return (
      <View style={[styles.scene, {backgroundColor: '#DAF6FF'}]}>
        {/* 可点击会高亮的元素及其响应 */}
        <TouchableHighlight onPress={this.onPress} underlayColor='#FFFFFF'> 
          <Text> Welcome to the NavigatorIOS Demo. Press here!</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onSecondPress}> 
          <Text> This is my Component. Press here!</Text>
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

class MyComponent extends Component {
  render() {
    return (
      <View style={[styles.scene, {backgroundColor: '#767676'}]}>
        <Text>不能住在你心里，都是客死异乡。</Text>
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
