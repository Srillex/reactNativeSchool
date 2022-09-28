//import libraries
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// create a component
const PlaceItem = ({place, onSelect}) => {
  return (
    <View onPress={onSelect}>
      <Image source={{uri: place.imageUri}} />
      <View>
        <Text> {place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default PlaceItem;
