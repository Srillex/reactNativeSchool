//import liraries
import React, {Component} from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// create a component
const IconButton = ({icon, size, color, onPress}) => {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}>
      <Icon name={icon} size={size} color={color} />
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  button: {
    padding: 8,
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
});

//make this component available to the app
export default IconButton;
