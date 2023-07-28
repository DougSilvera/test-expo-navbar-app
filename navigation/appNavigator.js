import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen1 from "../screens/screen1";
import Screen2 from "../screens/screen2";
import Screen3 from "../screens/screen3";
import Screen4 from "../screens/screen4";
const Stack = createNativeStackNavigator();


function AppNavigator() {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Screen 1" component={Screen1} />
        <Stack.Screen name="Screen 2" component={Screen2} />
        <Stack.Screen name="Screen 3" component={Screen3} />
        <Stack.Screen name="Screen 4" component={Screen4} />
      </Stack.Navigator>
  )
}

export default AppNavigator;