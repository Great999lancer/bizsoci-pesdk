/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';

import {
  ListView,
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  Image,
  Dimensions,
  Platform,
  NativeModules,
  NativeEventEmitter,
  Alert,
  TouchableOpacity
} from 'react-native'

const RNFS = require('react-native-fs')
const PESDK = NativeModules.PESDK

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  onOpenEditorPress () {
    // ...get your image path
    const imageUrl = 'http://s1.bwallpapers.com/wallpapers/2014/05/09/blue-images_034357941.jpg';
    const imagePath = RNFS.DocumentDirectoryPath + '/image.jpeg'
    PESDK.present();
    // RNFS.downloadFile({ fromUrl: imageUrl, toFile: imagePath }).promise.then(result => {
    //   PESDK.present(imagePath)
    //   this.setState({ output: 'Select an image to edit...' })
    // })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Nativee!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TouchableOpacity onPress={this.onOpenEditorPress.bind(this)}>
          <Text style={styles.button}>Push PESDK Editor</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
