//import libraries
import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Colors} from '../../constants/colors';
import PlaceItem from './PlaceItem';

// create a component
const PlacesList = ({place}) => {
  if (!place || place.length === 0) {
    return (
      <View style={styles.fallBackContainer}>
        <Text style={styles.fallBackTitle}>
          No Places added yet -start adding some!
        </Text>
      </View>
    );
  }
  return (
    <FlatList
      data={place}
      keyExtractor={item => item.id}
      renderItem={({item}) => <PlaceItem place={item} />}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  fallBackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallBackTitle: {
    fontSize: 16,
    color: Colors.primary800,
  },
});

//make this component available to the app
export default PlacesList;
