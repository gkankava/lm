import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native";
import ImageDescription from "../shared/ImageDescription";

const AuthTopShared = ({ title = "Mount Ushba", place = "Georgia" }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.innerContainer}>
        <ImageDescription title={title} place={place} />
        <View style={styles.logoContainer}>
          <Image
            style={styles.image}
            source={require("../../../assets/logo/logo.png")}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default AuthTopShared;

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  container: {
    // height: height * 0.45,
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 30,
    paddingBottom: 70,
  },
  innerContainer: {
    justifyContent: "space-between",
    flex: 1,
    marginTop: 80,
    alignItems: "flex-end",
  },
  logoContainer: { alignSelf: "flex-start" },
  image: { width: 120, height: 61 },
});
