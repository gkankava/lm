import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import Left from "./Left";
import Mid from "./Mid";
import Right from "./Right";

const ChatScreenHeader = ({ user }) => {
  return (
    <View style={styles.container}>
      <Left />
      <Mid pp={user.user.profilePicture} />
      <Right />
    </View>
  );
};

export default ChatScreenHeader;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 80,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,.1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
    // paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
