import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./navigation/appNavigator";
import React from "react";
import Header from "./components/header";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Footer from "./components/footer";

export default function App() {
  const [currentScreen, setCurrentScreen] = React.useState("Screen 1");
  return (
    <SafeAreaProvider>
      <NavigationContainer
        onStateChange={(state) => {
          const currentRouteName = state.routes[state.index].name;
          setCurrentScreen(currentRouteName);
        }}
      >
        <Header currentScreen={currentScreen} />
        <AppNavigator />
        <Footer currentScreen={currentScreen} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
