import React from "react";
import { Text, StyleSheet } from "react-native";
import { Header } from "react-native-elements";

const AppHeader = ({ left, center, right, centerStyle }) => {
  return (
    <Header
    placement="center"
    leftComponent={left}
    centerComponent={center}
    rightComponent={right}
    centerContainerStyle={centerStyle}
  />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default AppHeader;
