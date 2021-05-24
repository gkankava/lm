import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import BotTabNavigator from "../shared/bottomNav/botTabNavigator";

import ProfileHeader from "./ProfileHeader";
import Main from "./main/Main";

const height = Dimensions.get("screen").height;

function profileScreen() {
  return (
    <>
      <ProfileHeader />
      <View style={styles.container}>
        <Main />
      </View>
      <BotTabNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: height * 0.55,
    width: "100%",
    left: 0,
    top: height * 0.45,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 50,
  },
});

export default profileScreen;
