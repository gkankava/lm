import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";

import ParallaxComponent from "../shared/ParallaxComponent";
import MenuModal from "../shared/modals/MenuModal";
import BottomTavNavigator from "../shared/bottomNav/botTabNavigator";
import BlogContent from "./BlogContent";
import { userProvider } from "../../../store/user/auth";

const height = Dimensions.get("screen").height;

const BlogScreen = ({ navigation }) => {
  const { currentUser } = userProvider();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ImageBackground
      source={require("../../../assets/images/bg.jpg")}
      style={styles.container}
      imageStyle={{
        height: "70%",
        width: "100%",
        alignSelf: "center",
      }}
    >
      <MenuModal vis={modalVisible} setVis={setModalVisible} />
      <ParallaxComponent
        setModalVisible={setModalVisible}
        Body={BlogContent}
        navigation={navigation}
        name={currentUser.user.name}
        image={currentUser.user.profilePicture}
      />
      <BottomTavNavigator />
    </ImageBackground>
  );
};

export default BlogScreen;

const styles = StyleSheet.create({
  container: { width: "100%", height: "100%" },
});
