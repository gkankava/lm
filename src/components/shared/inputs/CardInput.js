import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const CardInput = (props) => {
  const { type, error, style, ...restOfProps } = props;
  return (
    <View
      style={{
        ...styles.inputContainer,
        borderBottomColor: error ? "#D98383" : "#D9D9D9",
        ...style,
      }}
    >
      {type === "name" ? (
        <EvilIcons name="user" size={20} color="#5A5A5A" />
      ) : type === "card" ? (
        <EvilIcons name="credit-card" size={20} color="#5A5A5A" />
      ) : type === "exp" ? (
        <EvilIcons name="calendar" size={20} color="#5A5A5A" />
      ) : (
        <EvilIcons name="lock" size={20} color="#5A5A5A" />
      )}
      <TextInput
        style={styles.inputS}
        autoCapitalize="none"
        autoCorrect={false}
        {...restOfProps}
      />
    </View>
  );
};

export default CardInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingVertical: 10,
    justifyContent: "flex-start",
    marginBottom: 20,
  },
  inputS: {
    fontSize: 16,
    width: "80%",
    marginHorizontal: 5,
    flexGrow: 1,
    color: "#3A3A3C",
  },
});
