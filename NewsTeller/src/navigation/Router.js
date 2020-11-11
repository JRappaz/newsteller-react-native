import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { basicHeader } from "./headers";

import Main from "@pages/Main";
import WebDisplayer from "@pages/WebDisplayer";

const Stack = createStackNavigator();

// Root of stack naivgator
export default Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={basicHeader} initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="WebDisplayer"
          component={WebDisplayer}
          options={{ headerBackTitle: "Back" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
