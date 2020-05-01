/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection:"row",width:200,justifyContent:"space-around"}}>
          <TouchableOpacity>
           <Text style>INC</Text>
          </TouchableOpacity>
          <Text style>0</Text>
          <TouchableOpacity>
           <Text style>DESC</Text>
          </TouchableOpacity>
        </View>
      </View>
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