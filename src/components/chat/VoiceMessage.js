import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Animated,
  ImageBackground,
} from "react-native";
import { Audio } from "expo-av";

import { AntDesign } from "@expo/vector-icons";

const ENDPOINT = "http://134.209.239.1";

const VoiceMessage = ({ message }) => {
  const [sound, setSound] = useState();
  const [duration, setDuration] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [val, setVal] = useState(new Animated.Value(0));
  let soundUri = ENDPOINT + message.text;

  useEffect(() => {
    const getAudio = async () => {
      const sound = new Audio.Sound();
      await sound.loadAsync({ uri: soundUri }).then((res) => {
        setDuration(res.durationMillis);
      });
    };
    if (!duration) {
      getAudio();
    }
  }, []);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync({ uri: soundUri });
    setSound(sound);
    setIsPlaying(true);
    await sound.playAsync().then((res) => {
      setTimeout(() => {
        setIsPlaying(false);
      }, res.durationMillis);
    });
  }

  async function stopSound() {
    sound.stopAsync();
    setIsPlaying(false);
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    if (isPlaying) {
      playSoundAnim();
    } else {
      val.setValue(0);
    }
  }, [isPlaying]);

  const playSoundAnim = () => {
    Animated.timing(val, {
      toValue: 180,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };

  const playAnimationStyle = {
    transform: [
      {
        translateX: val,
      },
    ],
  };

  return (
    <View
      style={{
        backgroundColor: "#14859B",
        height: 50,
        width: 250,
        borderRadius: 15,
        borderBottomRightRadius: 0,
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
      }}
    >
      <TouchableOpacity onPress={!isPlaying ? playSound : stopSound}>
        <View
          style={{
            backgroundColor: "white",
            height: 40,
            width: 40,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isPlaying ? (
            <AntDesign name="pausecircle" size={30} color="#14859B" />
          ) : (
            <AntDesign name="play" size={30} color="#14859B" />
          )}
        </View>
      </TouchableOpacity>
      <View
        style={{
          marginLeft: 10,
          width: 180,
          height: "100%",
          marginRight: 10,
        }}
      >
        <ImageBackground
          source={require("./assets/soundForm.png")}
          style={{
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center",
          }}
        >
          <Animated.View
            style={[
              {
                height: "100%",
                width: 2,
                backgroundColor: "#73ADB9",
                // backgroundColor: "white",
              },
              playAnimationStyle,
            ]}
          />
        </ImageBackground>
        <View></View>
      </View>
    </View>
  );
};

export default VoiceMessage;
