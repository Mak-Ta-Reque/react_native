/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  ImageBackground,
  TextInput,
  StatusBar,
} from 'react-native';
import Forcast from "./Forcast";
import OpenWeatherMap from "./open_weather_map";


class WeatherProject extends Component{
  constructor(props){
    super(props);
    this.state = {zip: "", forcast: null };
  }


  _handleTextChange = event => {
    let zip = event.nativeEvent.text
    OpenWeatherMap.fetchForacast(zip).then(forcast=>{
      console.log(forcast);
      this.setState({forcast: forcast});
    });
  };

  render(){
    let content = null;
    if (this.state.forcast !=null){
      content = (
        <Forcast
          main = {this.state.forcast.main}
          description = {this.state.forcast.description}
          temp = {this.state.forcast.temp}
        />
      );
    }
    return(
      <View style={styles.container}>
      <ImageBackground source={require('./flowers.png')} style={styles.image}>
      <View style={styles.row}>
        <View>
          <Text style={styles.welcome}>
            Give a postal code
          </Text>
        </View>
        <View>
          <TextInput
          style={styles.input}
          onSubmitEditing={this._handleTextChange}
        />
        </View>
      </View>
        
        {content}
        
      </ImageBackground>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#666666"

  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },

  input: {
    flex: 1,
    flexBasis: 1,
    width: 100,
    height: 20,
    fontSize: 20,
    padding: 1,
    textAlign: "center",
    borderBottomColor: '#000', // Add this to specify bottom border color
    borderBottomWidth: 2   
  },
    image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    height: '100%'
  },
  row: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    padding:30

  }



});
export default WeatherProject;