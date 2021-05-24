import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import ImageDescription from "../shared/ImageDescription";
import BtnFull from "../shared/buttons/BtnFull";
import BtnBord from "../shared/buttons/BtnBord";

const AuthScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackGround}
        source={require("../../../assets/images/bg.jpg")}
      >
        <SafeAreaView style={styles.innerContainer}>
          <ImageDescription />
        </SafeAreaView>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../../assets/logo/logo.png")}
          />
        </View>
        <View style={styles.btnContainer}>
          <LinearGradient
            start={[0.2, 0]}
            end={[1, 1]}
            colors={["#4666A0", "#002960"]}
            style={styles.linearBackground}
          >
            <BtnFull
              bgColor="white"
              txtColor="#0D346C"
              text="Sign In"
              st={{ marginBottom: 12 }}
              onPress={() => navigation.navigate("Login")}
            />
            <BtnBord
              color="white"
              text="Sign Up"
              onPress={() => navigation.navigate("SignUp")}
            />
          </LinearGradient>
        </View>
      </ImageBackground>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4666A0",
  },
  imageBackGround: {
    width: "100%",
    height: "100%",
  },
  innerContainer: {
    marginRight: 30,
    marginTop: 80,
    alignItems: "flex-end",
  },
  logo: { width: 120, height: 61 },
  logoContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 80,
  },
  btnContainer: {
    width: "100%",
    height: "25%",
    backgroundColor: "white",
    borderTopRightRadius: 60,
    overflow: "hidden",
  },
  linearBackground: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
