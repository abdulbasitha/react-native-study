/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    SafeAreaView,
    TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
class AddTodo extends Component {
    state={
        text:''
    }
    AddTodo = (text)=>{
        this.props.dispatch({type:'ADD_TODO',text})
        this.setState({text:''})
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{
                      flexDirection:'row',
                      marginHorizontal:20
                }}>
                <TextInput  placeholder="create new"
                onChangeText={(text)=>{this.setState({text})}}
                value={this.state.text}
                style={{borderWidth:1, 
                    borderColor:"gray",
                    backgroundColor:"#0023",
                    height:50,
                    paddingLeft:20,
                    flex:1,
                }}>
                        
                        </TextInput>

                        <TouchableOpacity 
                        onPress={()=>this.AddTodo(this.state.text)}
                        style={{
                            alignSelf:"center",
                            paddingLeft:10,
                       
                       }}>
                        
                         
                          <Icon name="plus" size={30} color="#900" />
                          
                          </TouchableOpacity>
                 
                          </View>
                   
            </SafeAreaView>
        );
    }
}
export default connect()(AddTodo);

const styles = StyleSheet.create({
    container: {
  
      
       
    }
});