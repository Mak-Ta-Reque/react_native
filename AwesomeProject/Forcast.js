import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native"; 
class Forcast extends Component { 
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.bigText}>
                    {this.props.main}
                </Text>
                <Text style={styles.mainText}>
                    Curent condition is {this.props.description}
                </Text>
                <Text style={styles.bigText}>
                    {this.props.temp} °F
                </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { height: 130 },
    bigText: {
        flex: 2,
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        color: "#FFFFFF"
    },
    mainText:{
        flex: 2,
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        color: "#FFFFFF"
    }
});

export default Forcast;
