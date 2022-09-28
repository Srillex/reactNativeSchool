/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import AddPlaces from './src/screen/AddPlaces';
import AllPlaces from './src/screen/AllPlaces';
import IconButton from './src/component/UI/IconButton';
import {Colors} from './src/constants/colors';
import Map from './src/screen/Map';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary500,
          },
          headerTintColor: Colors.gray700,
          contentStyle: {
            backgroundColor: Colors.gray700,
          },
        }}>
        <Stack.Screen
          name="AllPlaces"
          component={AllPlaces}
          options={({navigation}) => ({
            title: 'Your Favorite places',
            headerRight: ({tintColor}) => (
              <IconButton
                icon={'plus'}
                size={24}
                color={tintColor}
                onPress={() => navigation.navigate('AddPlace')}
              />
            ),
          })}
        />
        <Stack.Screen
          name="AddPlace"
          component={AddPlaces}
          options={{title: 'Add new Place'}}
        />
        <Stack.Screen
          name="Map"
          component={Map}
          options={{title: 'Pick up location'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
