//import liraries
import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, PermissionsAndroid} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import OutLineButton from '../UI/OutLineButton';
import {Colors} from '../../constants/colors';
import {getAddress, getMapPreview} from '../../util/location';
import {useNavigation, useRoute, useIsFocused} from '@react-navigation/native';

// create a component
const LocationPicker = ({onPickLocation}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();
  const [location, setLocation] = useState('');
  console.log(getMapPreview(location.lat, location.lng));

  console.log(location);
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'App Location Permission',
          message: 'App needs access to your location ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('location permission given');
      } else {
        console.log('location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  useEffect(() => {
    requestCameraPermission();
  }, []);

  const getLocationHandler = async () => {
    await Geolocation.getCurrentPosition(loc =>
      setLocation({
        lat: loc.coords.latitude,
        lng: loc.coords.longitude,
      }),
    );
  };

  let locationPreview = <Text> No location pick yet.</Text>;
  if (location) {
    locationPreview = (
      <Image
        style={styles.image}
        source={{uri: getMapPreview(location.lat, location.lng)}}
      />
    );
  }
  const pickOnMapHandler = () => {
    navigation.navigate('Map');
  };

  useEffect(() => {
    // route navigation passing parameter
    if (isFocused && route.params) {
      const mapPickedLocation = {
        lat: route.params.pickedLat,
        lng: route.params.pickedLng,
      };
      setLocation(mapPickedLocation);
    }
  }, [isFocused, route.params]);
  useEffect(() => {
    const handleLocation = async () => {
      if (location) {
        const address = await getAddress(location.lat, location.lng);
        onPickLocation({...location, address: address});
        console.log(getAddress);
      }
    };
    handleLocation();
  }, [location, onPickLocation]);
  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
      <View style={styles.actions}>
        <OutLineButton icon={'location-arrow'} onPress={getLocationHandler}>
          Locate user
        </OutLineButton>
        <OutLineButton icon={'map'} onPress={pickOnMapHandler}>
          Pick on Map
        </OutLineButton>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  mapPreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
});

//make this component available to the app
export default LocationPicker;
