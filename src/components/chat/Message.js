import React, { useEffect, useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  CachedImage,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";

import TextMessage from "./TextMessage";
import VoiceMessage from "./VoiceMessage";
import ImageMessage from "./ImageMessage";

const Message = ({ message, name, pP }) => {
  const [type, setType] = useState();
  const [imgModal, setImgModal] = useState({ state: false, img: "" });

  useEffect(() => {
    if (message.text.includes("/uploads/media")) {
      if (
        message.text.slice(message.text.lastIndexOf(".")) === ".caf" ||
        message.text.slice(message.text.lastIndexOf(".")) === ".m4a"
      ) {
        setType("audio");
      } else {
        setType("image");
      }
    } else {
      setType("text");
    }
  }, []);

  let isSentByUser = false;
  const trimmedName = name.trim().toLowerCase();
  if (message.user === trimmedName) {
    isSentByUser = true;
  }

  return (
    <>
      {imgModal.state && (
        <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0, .9)" />
      )}
      {isSentByUser ? (
        <View
          style={{
            flexDirection: "row",
            alignSelf: "flex-end",
            alignItems: "flex-end",
            marginBottom: 10,
          }}
        >
          {type === "text" ? (
            <TextMessage message={message} />
          ) : type === "image" ? (
            <ImageMessage message={message} setImgModal={setImgModal} />
          ) : type === "audio" ? (
            <VoiceMessage message={message} />
          ) : null}
          <View
            style={{
              height: 40,
              width: 40,
              marginLeft: 10,
            }}
          >
            {/* <Image
              source={{
                uri: pP,
              }}
              style={{ flex: 1, width: 40, height: 40, borderRadius: 50 }}
            /> */}
            {pP}
            <View
              style={{
                position: "absolute",
                height: 12,
                width: 12,
                backgroundColor: "#75E910",
                borderRadius: 50,
                borderWidth: 2,
                borderColor: "white",
                left: "70%",
                top: "70%",
              }}
            />
          </View>
        </View>
      ) : (
        <></>
      )}

      {/* modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={imgModal.state}
        onRequestClose={() => {
          setImgModal({ state: false, img: "" });
        }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0, .9)",
            height: "100%",
            width: "100%",
          }}
        >
          <SafeAreaView>
            <TouchableOpacity
              style={{
                zIndex: 99,
                marginLeft: 20,
              }}
              onPress={() => setImgModal({ state: false, img: "" })}
            >
              <EvilIcons name="close" size={40} color="white" />
            </TouchableOpacity>
            <Image
              source={{ uri: imgModal.img }}
              style={{
                zIndex: -100,
                resizeMode: "contain",
                height: "100%",
                width: "100%",
              }}
            />
          </SafeAreaView>
        </View>
      </Modal>
    </>
  );
};

export default Message;

const styles = StyleSheet.create({});
