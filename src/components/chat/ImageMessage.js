import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const ENDPOINT = "http://134.209.239.1";

const ImageMessage = ({ message, setImgModal }) => {
  let imgUri = ENDPOINT + message.text;
  return (
    <View
      style={{
        backgroundColor: "#14859B",
        borderRadius: 15,
        borderBottomRightRadius: 0,
        borderColor: "#106C7E",
        borderWidth: 1,
        maxWidth: "80%",
        minHeight: 100,
        maxHeight: 400,
      }}
    >
      <TouchableOpacity
        onPress={() => setImgModal({ state: true, img: imgUri })}
      >
        <Image
          style={{
            height: 250,
            minWidth: 200,
            maxWidth: 200,
            borderColor: "#F2F2F2",
            borderRadius: 10,
            borderRadius: 15,
            borderBottomRightRadius: 0,
          }}
          source={{ uri: imgUri }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ImageMessage;

const styles = StyleSheet.create({});
