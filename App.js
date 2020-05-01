/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";
import CounterApp from './src/CounterApp';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
const initialState ={
  counter:0
}
const raducer = (state=initialState,action)=>{
      switch(action.type){
        case 'INCREASE_COUNTER':
              return {counter:state.counter+1}
        case 'DECREASE_COUNTER':
              return {counter:state.counter-1}
      }
      return state
    }

const store = createStore(raducer)
class App extends Component {

  render() {
    return (
      <Provider store={store}>
         <CounterApp />
     </Provider>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});