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
import AddTodo from './containers/AddTodo'
import VisibleTodo from './containers/VisibileTodo'
class Todo extends Component {
    state ={
        todos:[],
        visbility:'SHOW_ALL_TODOS'
    }
    render() {
        return (
            <View style={styles.container}>
               <AddTodo />
               <View>
                <VisibleTodo/>
               </View>
            </View>
        );
    }
}
export default Todo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});