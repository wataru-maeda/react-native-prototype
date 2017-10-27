import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Home from './src/screens/Home';
import { store } from './src/store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}