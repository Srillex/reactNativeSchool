//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../../constants/colors';

// create a component
const OutLineButton = ({onPress, icon, children}) => {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}>
      <Icon
        style={styles.icon}
        name={icon}
        size={18}
        color={Colors.primary500}
      />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 6,
    margin: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: Colors.primary100,
  },
  pressed: {opacity: 0.1},
  icon: {marginRight: 6},
  text: {color: Colors.primary500},
});

//make this component available to the app
export default OutLineButton;
