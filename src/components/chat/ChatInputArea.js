import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Audio } from "expo-av";
import { Stopwatch } from "react-native-stopwatch-timer";

import * as ImagePicker from "expo-image-picker";
import Camera from "../profile/comp/Camera";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { socketProvider } from "../../../store/socket/socket";
import {
  sendMessage,
  sendMedia,
  uploadMedia,
  startRecording,
  stopRecording,
} from "../../../store/actions/chat";

const ChatInputArea = ({
  message = "",
  setMessage,
  media = "",
  setMedia,
  isRecording = false,
  setIsRecording,
  setProgress,
}) => {
  const { socket } = socketProvider();

  const [animVal, setAnimVal] = useState(new Animated.Value(1));
  const [stopwatchStart, setStopwatchStart] = useState(false);
  const [stopwatchReset, setstopwatchReset] = useState(false);

  const [recording, setRecording] = useState();
  const [uploadedMedia, setUploadedMedia] = useState();

  const [camActive, setCamActive] = useState(false);

  const onAirAnimation = () => {
    Animated.loop(
      Animated.timing(animVal, {
        toValue: 0.4,
        timing: 1000,
        useNativeDriver: true,
      })
    ).start();
  };

  const animatedStyle = {
    opacity: animVal,
  };

  const options = {
    text: {
      fontSize: 13,
      color: "#B5B4B4",
      marginLeft: 7,
    },
  };

  const recordingIcon = () => {
    if (isRecording) {
      return {
        height: 25,
        width: 25,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "rgb(20, 113, 155)",
      };
    } else {
      return {
        height: 20,
        width: 16,
      };
    }
  };

  useEffect(() => {
    if (uploadedMedia) {
      sendMedia(socket, uploadedMedia, setUploadedMedia);
    }
  }, [uploadedMedia]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setMedia({
        name: result.uri.slice(result.uri.lastIndexOf("/") + 1),
        uri: result.uri,
        type: "image/jpg",
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        {isRecording ? (
          <View
            style={{
              ...styles.textInput,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Animated.View
              style={{
                ...animatedStyle,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  height: 20,
                  width: 20,
                  backgroundColor: "#D33333",
                  borderRadius: 50,
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    height: 15,
                    width: 15,
                    backgroundColor: "#D33333",
                    borderRadius: 50,
                    borderWidth: 3,
                    borderColor: "white",
                    alignSelf: "center",
                  }}
                />
              </View>
            </Animated.View>
            <Stopwatch
              laps={false}
              msecs={false}
              start={stopwatchStart}
              reset={stopwatchReset}
              options={options}
            />
          </View>
        ) : (
          <>
            {media ? (
              <Text style={{ marginRight: "auto" }}>
                {media.uri.slice(media.uri.lastIndexOf("/") + 1)}
              </Text>
            ) : (
              <TextInput
                style={styles.input}
                placeholder="Type a Message"
                value={message}
                onChangeText={(message) => setMessage(message)}
                returnKeyType="send"
                onEndEditing={() => {
                  sendMessage(socket, message);
                  setMessage("");
                }}
              />
            )}
          </>
        )}
        {media ? (
          <View tyle={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                uploadMedia(media, setMedia, setUploadedMedia, setProgress);
              }}
            >
              <MaterialCommunityIcons
                name="send-circle"
                size={33}
                color="#14859B"
              />
            </TouchableOpacity>
          </View>
        ) : (
          <>
            {message.length > 0 ? (
              <>
                <TouchableOpacity
                  style={[styles.btnContainer, { backgroundColor: "white" }]}
                >
                  <MaterialCommunityIcons
                    name="fire"
                    size={30}
                    color="#F86436"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btnContainer}
                  onPress={() => {
                    sendMessage(socket, message);
                    setMessage("");
                  }}
                >
                  <MaterialCommunityIcons
                    name="email-send"
                    size={20}
                    color="white"
                  />
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity
                  style={styles.btnContainer}
                  delayLongPress={300}
                  onPressIn={() => {
                    setstopwatchReset(false);
                    setIsRecording(true);
                    onAirAnimation();
                  }}
                  onLongPress={() => {
                    console.log("recording has started");
                    startRecording(Audio, setRecording);
                    setStopwatchStart(true);
                  }}
                  onPressOut={() => {
                    setIsRecording(false);
                    stopRecording(Audio, setRecording, recording, setMedia);
                    setStopwatchStart(false);
                    setstopwatchReset(true);
                  }}
                >
                  <MaterialCommunityIcons
                    name="microphone"
                    size={25}
                    color="white"
                  />
                </TouchableOpacity>
              </>
            )}
          </>
        )}
      </View>
      <View style={styles.bot}>
        <TouchableOpacity style={styles.btnBotContainer}>
          <MaterialCommunityIcons
            name="camera"
            size={24}
            color="#95989A"
            onPress={() => {
              setCamActive(true);
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnBotContainer} onPress={pickImage}>
          <MaterialCommunityIcons
            name="folder-image"
            size={24}
            color="#95989A"
          />
        </TouchableOpacity>
      </View>
      <Camera
        status={camActive}
        setStatus={setCamActive}
        send={() => {
          uploadMedia(media, setMedia, setUploadedMedia, setProgress);
        }}
        media={media}
        setMedia={setMedia}
      />
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
