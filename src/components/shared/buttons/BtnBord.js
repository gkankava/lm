import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const BtnBord = ({ color, text, st = {}, onPress, disabled = false }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.button, ...st, borderColor: color }}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={{ ...styles.text, color: color }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default BtnBord;

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  button: {
    width: width * 0.626,
    height: height * 0.061,
    borderRadius: 50,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { fontSize: 14 },
});
