import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Animated,
} from "react-native";

import ImageDescription from "../shared/ImageDescription";
import DropDownMenu from "../shared/DropDownMenu";
import ProfileGreeting from "../shared/ProfileGreeting";

const height = Dimensions.get("screen").height;

const BlogHeader = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.innerContainer}>
        <View style={styles.top}>
          <ImageDescription
            title="Mount Ushba"
            place="Georgia"
            direction="left"
          />
          <DropDownMenu />
        </View>
        <View>
          <ProfileGreeting />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default BlogHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    //  marginTop: 100,
    paddingHorizontal: 30,
    //  backgroundColor: "red",
  },
  innerContainer: { marginTop: 80 },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
