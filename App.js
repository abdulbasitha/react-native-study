/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";
import {Provider} from 'react-redux'
import Todo from './src/TodoApp'
import store from './src/store'
class Main extends Component {
  render() {
    return (
      <Provider store={store}>
      <Todo />
      </Provider>
    );
  }
}
export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});