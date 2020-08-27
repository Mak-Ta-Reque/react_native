"use strict";

import React, { Component } from "react";
import {StyleSheet, PanResponder, View, Text} from "react-native";

const CIRCLE_SIZE = 40;
const CIRCLE_COLOR = "blue";
const CIRCLE_HIGLIGHT_COLOR ="green";

class PanResponderExample extends Component {
  _panResponder = {};
  _previousLeft = 0;
  _previousTop = 0;
  _circleStyle = {};
  circle = null;

  constructor(props){
    super(props);
    this.state ={
      numberActiveTouches: 0,
      moveX: 0,
      moveY: 0,
      x0: 0,
      y0: 0,
      dx: 0,
      dy: 0,
      vx: 0,
      vy: 0
    }
  }

  UNSAFE_componentWillMount(){
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponde:  this._handleMoveShouldSetPanResponder,
      onPanResponderGrant:  this._handlePanResponderGrant,
      onPanResponderMove:  this._handlePanResponderMove,
      onPanResponderRelease:  this._handlePanResponderEnd,
      onPanResponderTerminate:  this._handlePanResponderTerminate,
    });
    this._previousLeft = 30;
    this._previousTop = 84;
    this._circleStyle = {
      style:{
        left: this._previousLeft, top:this._previousTop

    }}

  }

  componentDidMount(){
    this._updatePostion();
  }

  render(){
    return(
    <View style={styles.container}>
      <View 
        ref={circle => {
          this.circle = circle;
        }}
        style = {styles.circle}
        {...this._panResponder.panHandlers}/>
      <Text>
        {this.state.numberActiveTouches} touches,
        dx: {this.state.dx}
        dy: {this.state.dy}
        vx: {this.state.vx}
        vy: {this.state.vy}

      </Text>
    </View>
    
    );
  }

  _highlight = () => {
    this.circle && this.circle.setNativeProps(
      {
        style:{backgroundColor: CIRCLE_HIGLIGHT_COLOR}
      }
    );
  };
  _unHighlight = () => {
    this.circle && this.circle.setNativeProps(
      {
        style:{backgroundColor: CIRCLE_COLOR}
      }
    );
  };

  _updatePostion = () => {
    this.circle &&  this.circle.setNativeProps(this._circleStyle);
  }

  _handleStartShouldSetPanResponder = (event, gestureState) => {
    return true;
  }

  _handleMoveShouldSetPanResponder = (event, gestureState) => {
    return true;
  }

  _handlePanResponderGrant = (event, gestureState) => {
    this._highlight();
  }

  _handlePanResponderMove = (event, gestureState) => {
    this.setState({
      stateID: gestureState.stateID,
      moveX: gestureState.moveX,
      moveY: gestureState.moveY,
      x0: gestureState.x0,
      y0: gestureState.y0,
      dx: gestureState.dx,
      dy: gestureState.dy,
      vx: gestureState.vx,
      vy: gestureState.vy,
      numberActiveTouches: gestureState.numberActiveTouches
    });
    this._circleStyle.style.left = this._previousLeft + gestureState.dx;
    this._circleStyle.style.top = this._previousTop + gestureState.dy;
    this._updatePostion();
  };

  _handlePanResponderEnd = (event, gestureState) => {
    this._unHighlight();
    this._previousLeft += gestureState.dx;
    this._previousTop += gestureState.dy;
  };

}

const styles = StyleSheet.create({
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE/2,
    backgroundColor: CIRCLE_COLOR,
    position: "absolute",
    left:0,
    top:0,
  },
  container:{
    flex: 1, 
    padding:64
  }

});

export default PanResponderExample


