/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, { Component } from 'react';
import { StyleSheet, Text, View, AsyncStorage  } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import CityList from './components/CityList';
import CityReducer from './reducers/reducer';

const client = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5/weather?q=jaipur,in&units=metric&appid=4450a2328870e3be167079abf24de1a2',
  responseType: 'json'
});

const store = createStore(CityReducer,applyMiddleware(axiosMiddleware(client)));

export default class App extends Component {    


  constructor(props){
    super(props);    
    // this.state = {
    //   latitude: null,
    //   longitude: null,
    //   error: null,
    // };
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <CityList/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  }
});
/*

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Anubhutireact-native </Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
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
*/