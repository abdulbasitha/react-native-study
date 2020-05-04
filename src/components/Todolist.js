import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

const TodoList = ({todos,toggleTodo}) => (
    <View style={styles.container}>
        {todos.map(todos=>{
            <TouchableOpacity key={todos.id} onPress={()=>toggleTodo(todo.id)}>
                <Text style={{fontSize:24,
                textDecorationLine:todo.completed?'line-through':'none'
                }}>{todos.text}</Text>
            </TouchableOpacity>
        })}
    </View>
    )
export default TodoList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});