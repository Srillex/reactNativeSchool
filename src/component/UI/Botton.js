//import liraries
import React, {Component} from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';

// create a component
const Button = ({onPress, children}) => {
  return (
    <Pressable
      style={({pressed}) => [styles.container, pressed && styles.pressed]}
      onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    margin: 4,
    backgroundColor: Colors.primary800,
    elevation: 2,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 2,
    borderRadius: 4,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    color: Colors.primary50,
    fontSize: 16,
    textAlign: 'center',
  },
});

//make this component available to the app
export default Button;
