import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from "react-native";

import { userProvider } from "../../../store/user/auth";

import ChatScreenHeader from "./header/ChatScreenHeader";
import ChatArea from "./ChatArea";
import ChatInputArea from "./ChatInputArea";

const height = Dimensions.get("screen").height - 100;

const ChatScreen = () => {
  const { currentUser } = userProvider();
  const [message, setMessage] = useState("");
  const [media, setMedia] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  return (
    // <View style={styles.container}>
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={0}
    >
      <>
        <ChatScreenHeader user={currentUser} />
        <ChatArea />
        <ChatInputArea
          message={message}
          setMessage={setMessage}
          media={media}
          setMedia={setMedia}
          isRecording={isRecording}
          setIsRecording={setIsRecording}
        />
      </>
    </KeyboardAvoidingView>
    // </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  avoidingView: { flex: 1 },
});
