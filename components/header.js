import React from "react";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

function Header({ currentScreen }) {
    const navigation = useNavigation();
    console.log(currentScreen);
  return (
    <Appbar.Header>
        {currentScreen !== "Screen 1" && <Appbar.BackAction onPress={() => {navigation.goBack()}} />}
      <Appbar.Content title={currentScreen} />
      <Appbar.Action icon="calendar" onPress={() => {navigation.navigate("Screen 2")}} />
    </Appbar.Header>
  );
}

export default Header;
