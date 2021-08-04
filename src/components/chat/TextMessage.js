import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TextMessage = ({ message }) => {
  return (
    <View
      style={{
        backgroundColor: "#14859B",
        borderRadius: 15,
        borderBottomRightRadius: 0,
        padding: 10,
        paddingLeft: 28,
        paddingRight: 28,
        borderWidth: 0.5,
        borderColor: "#106C7E",
        maxWidth: "80%",
      }}
    >
      <Text style={{ color: "white", fontSize: 14 }}>{message.text}</Text>
    </View>
  );
};

export default TextMessage;

const styles = StyleSheet.create({});
