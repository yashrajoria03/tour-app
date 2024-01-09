import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Loading from "./screens/Loading";
import { useEffect, useState, useRef } from "react";
import CreateTrip from "./screens/Trip/CreateTrip";
import ViewTrip from "./screens/Trip/PastTrip";
import PastTrip from "./screens/Trip/PastTrip";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import EnterTrip from "./screens/Trip/EnterTrip";

const Stack = createNativeStackNavigator();

const App = () => {
  // const isFirstLoadRef = useRef(true);

  // useEffect(() => {
  //   if (isFirstLoadRef.current) {
  //     isFirstLoadRef.current = false;
  //   }
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* {isFirstLoadRef.current && (
          <Stack.Screen
            name="Loading"
            component={Loading}
            options={{ headerShown: false }}
          />
        )} */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateTrip"
          component={CreateTrip}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PastTrip"
          component={PastTrip}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
