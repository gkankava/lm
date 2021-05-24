import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const ChatInputArea = ({
  message = "",
  setMessage,
  media = "",
  setMedia,
  isRecording = false,
  setIsRecording,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TextInput
          style={styles.input}
          placeholder="Type a Message"
          value={message}
          onChangeText={(message) => setMessage(message)}
        />
        {message.length > 0 ? (
          <>
            <TouchableOpacity
              style={[styles.btnContainer, { backgroundColor: "white" }]}
            >
              <MaterialCommunityIcons name="fire" size={30} color="#F86436" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContainer}>
              <MaterialCommunityIcons
                name="email-send"
                size={20}
                color="white"
              />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity style={styles.btnContainer}>
              <MaterialCommunityIcons
                name="microphone"
                size={25}
                color="white"
              />
            </TouchableOpacity>
          </>
        )}
      </View>
      <View style={styles.bot}>
        <TouchableOpacity style={styles.btnBotContainer}>
          <MaterialCommunityIcons name="camera" size={24} color="#95989A" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnBotContainer}>
          <MaterialCommunityIcons
            name="folder-image"
            size={24}
            color="#95989A"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatInputArea;

const styles = StyleSheet.create({
  container: {
    height: 90,
    borderTopWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
  },
  top: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    height: 50,
  },
  input: { flex: 1, paddingRight: 7 },
  btnContainer: {
    marginLeft: 5,
    backgroundColor: "#14859B",
    borderRadius: 40,
    height: 35,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  bot: { height: 40, flexDirection: "row", paddingHorizontal: 20 },
  btnBotContainer: {
    marginRight: 10,
  },
});
