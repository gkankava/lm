import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Audio } from "expo-av";

import { userProvider } from "../../../store/user/auth";
import { socketProvider } from "../../../store/socket/socket";

import { fetchChat } from "../../../store/actions/chat";

import ChatScreenHeader from "./header/ChatScreenHeader";
import ChatArea from "./ChatArea";
import ChatInputArea from "./ChatInputArea";

const ENDPOINT = "http://134.209.239.1";

const ChatScreen = () => {
  const { currentUser } = userProvider();
  const [isFetching, setIsFetching] = useState(false);
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState("");

  const [media, setMedia] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  const [progress, setProgress] = useState(0);

  const { socket } = socketProvider();

  useEffect(() => {
    socket.on("message", (message) => {
      setMessageList([
        {
          ...message,
          _id: message.text + Math.random().toString().substr(2, 8),
        },
        ...messageList,
      ]);
    });
  }, [messageList]);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
    (async () => {
      if (Platform.OS !== "web") {
        const { status } = await Audio.requestPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need Audio permissions to make this work!");
        }
      }
    })();
    fetchChat(setIsFetching, currentUser.user.username, setMessageList);
  }, []);

  const pp = (
    <Image
      source={{
        uri: ENDPOINT + currentUser.user.profilePicture,
      }}
      style={{ flex: 1, width: 40, height: 40, borderRadius: 50 }}
    />
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={0}
    >
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <>
        <ChatScreenHeader user={currentUser} />
        <ChatArea
          messageList={messageList}
          name={currentUser.user.username}
          pP={pp}
          isFetching={isFetching}
        />
        <ChatInputArea
          message={message}
          setMessage={setMessage}
          media={media}
          setMedia={setMedia}
          isRecording={isRecording}
          setIsRecording={setIsRecording}
          setProgress={setProgress}
        />
      </>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  avoidingView: { flex: 1 },
});
