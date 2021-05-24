import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";

import AuthTopShared from "./AuthTopShared";
import PageContent from "./PageContent";
import LoginForm from "./LoginForm";

const LoginScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={styles.imageBackGround}
        source={require("../../../assets/images/bg.jpg")}
        imageStyle={{
          height: "60%",
          width: "100%",
          resizeMode: "cover",
        }}
      >
        <AuthTopShared />
        <PageContent header="Hello, Mate">
          <LoginForm />
        </PageContent>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  imageBackGround: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },

  innerContainer: {},
});
