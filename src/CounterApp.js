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
import { connect } from 'react-redux';
class CounterApp extends Component {
  
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: "row", width: 200, justifyContent: "space-around" }}>
                    <TouchableOpacity onPress={() => this.props.increaseCounter()}>
                        <Text style={{ fontSize: 20 }} >INC</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 }}>{this.props.counter}</Text>
                    <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
                        <Text style={{ fontSize: 20 }} >DESC</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
mapStateToProps = (state) => {
    return {
        counter:state.counter
    }
}
mapDispatchToProps = (dispatch) => {
    return {
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' })
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CounterApp);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});