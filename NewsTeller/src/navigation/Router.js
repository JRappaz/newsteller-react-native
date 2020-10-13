import React from 'react';
import {Image, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {basicHeader} from '@themes/Headers';

import Main from '@pages/Main';
import WebDisplayer from '@pages/WebDisplayer';

const Stack = createStackNavigator();

// Root of stack naivgator
export default Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={basicHeader} initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="WebDisplayer" component={WebDisplayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
