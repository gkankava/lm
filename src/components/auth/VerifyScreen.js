import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

import AuthTopShared from "./AuthTopShared";
import PageContent from "./PageContent";
import VerifyForm from "./VerifyForm";

const VerifyScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={styles.imageBackGround}
        source={require("../../../assets/images/bg2.png")}
        imageStyle={{
          height: "60%",
          width: "100%",
          resizeMode: "cover",
        }}
      >
        <AuthTopShared title="Old Tbilisi" place="Georgia" />
        <PageContent header="Verification" hasIndicator={true} step={2}>
          <VerifyForm />
        </PageContent>
      </ImageBackground>
    </View>
  );
};

export default VerifyScreen;

const styles = StyleSheet.create({
  imageBackGround: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
});
