import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Main from "@pages/Main"

const Stack = createStackNavigator()

// Root of stack naivgator
export default Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerLeft: null, title: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}