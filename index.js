/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Geolocation from '@react-native-community/geolocation';

Geolocation.setRNConfiguration({
  skipPermissionRequests: true,
  authorizationLevel: 'auto',
  locationProvider: 'playServices',
});

AppRegistry.registerComponent(appName, () => App);
