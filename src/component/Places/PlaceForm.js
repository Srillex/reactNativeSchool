//import liraries
import React, {useState, useCallback} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import {Colors} from '../../constants/colors';
import {Place} from '../../model/place';
import Button from '../UI/Botton';
import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';

// create a component
const PlaceForm = ({onCreatePlace}) => {
  const [enterTitle, setEnterTitle] = useState('');
  const [selectedImage, setSelectedImage] = useState();
  const [pickedLocation, setPickedLocation] = useState();

  const changeTitleHandler = enteredText => {
    setEnterTitle(enteredText);
  };

  const takeImageHandler = imageUri => {
    setSelectedImage(imageUri);
  };
  const pickLocationHandler = useCallback(location => {
    setPickedLocation(location);
  }, []);

  const savePlaceHandler = () => {
    const placeData = new Place(enterTitle, selectedImage, pickedLocation);
    onCreatePlace(placeData);
  };

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          value={enterTitle}
          onChangeText={changeTitleHandler}
        />
      </View>
      <Button onPress={savePlaceHandler}>Add Place</Button>

      <ImagePicker onTakeImage={takeImageHandler} />
      <LocationPicker onPickLocation={pickLocationHandler} />
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});

//make this component available to the app
export default PlaceForm;
