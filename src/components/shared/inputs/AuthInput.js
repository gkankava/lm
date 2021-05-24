import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const authInput = ({
  type,
  onChangeText,
  onBlur,
  value,
  placeholder,
  error,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <View
      style={{
        ...styles.inputContainer,
        borderBottomColor: error ? "#D98383" : "#EFEFF4",
      }}
    >
      {type === "text" ? (
        <Ionicons name="person-outline" size={20} color="#E5E5E5" />
      ) : (
        <Ionicons name="lock-closed-outline" size={20} color="#E5E5E5" />
      )}
      <TextInput
        style={styles.inputS}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        secureTextEntry={type === "password" ? !passwordVisible : false}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {type === "password" && (
        <TouchableWithoutFeedback
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          {passwordVisible ? (
            <Ionicons
              name="eye-off-outline"
              size={24}
              color="#E5E5E5"
              style={{ justifyContent: "flex-end" }}
            />
          ) : (
            <Ionicons
              name="eye-outline"
              size={24}
              color="#E5E5E5"
              style={{ justifyContent: "flex-end" }}
            />
          )}
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

export default authInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    borderBottomWidth: 2,
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
