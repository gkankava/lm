import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const BtnFull = ({
  bgColor,
  txtColor,
  text,
  st = {},
  onPress,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={{ ...styles.button, ...st, backgroundColor: bgColor }}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={{ ...styles.text, color: txtColor }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default BtnFull;

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  button: {
    width: width * 0.626,
    height: height * 0.061,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { fontSize: 14 },
});
