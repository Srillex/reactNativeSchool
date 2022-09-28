//import liraries
import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PlacesList from '../component/Places/PlacesList';

// create a component
const AllPlaces = ({route}) => {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const isFocused = useIsFocused;
  useEffect(() => {
    if (isFocused && route.params) {
      setLoadedPlaces(curPlaces => [...curPlaces, route.params.place]);
    }
  }, [isFocused, route]);
  return <PlacesList place={loadedPlaces} />;
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
export default AllPlaces;
