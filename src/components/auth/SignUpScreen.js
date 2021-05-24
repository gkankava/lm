import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";

import AuthTopShared from "./AuthTopShared";
import PageContent from "./PageContent";
import SignUpForm from "./SignUpForm";

const SignUpScreen = () => {
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
        <PageContent header="Join us" hasIndicator={true}>
          <SignUpForm />
        </PageContent>
      </ImageBackground>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  imageBackGround: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },

  innerContainer: {},
});
