//import liraries
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  PermissionsAndroid,
  Image,
} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import {Colors} from '../../constants/colors';
import OutLineButton from '../UI/OutLineButton';

// create a component
const ImagePicker = ({onTakeImage}) => {
  const [pickedImage, setPickedImage] = useState();
  console.log(pickedImage);
  // permission request by android os
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission given');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);

  // Image handler function
  const takeImageHandler = async () => {
    const result = await launchCamera({
      quality: 0.5,
    });
    console.log(result.assets[0].uri);
    setPickedImage(result.assets[0].uri);
    onTakeImage(result.assets[0].uri);
  };

  let imagePreview = <Text style={{color: 'white'}}>No image taken yet.</Text>;
  // image preview
  if (pickedImage) {
    imagePreview = <Image style={styles.image} source={{uri: pickedImage}} />;
  }
  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutLineButton icon={'plus'} onPress={takeImageHandler}>
        Take Image
      </OutLineButton>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

//make this component available to the app
export default ImagePicker;
