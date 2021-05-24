import React from "react";
import { View, Dimensions } from "react-native";
import StickyParallaxHeader from "react-native-sticky-parallax-header";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

const ParallaxComponent = ({
  Body,
  name = "friend",
  setModalVisible,
  navigation,
  image,
}) => {
  const renderBody = () => <Body navigation={navigation} />;

  return (
    <StickyParallaxHeader
      headerType="AvatarHeader"
      renderBody={renderBody}
      headerHeight={height * 0.177}
      parallaxHeight={height * 0.25}
      backgroundColor="transpernat"
      title={`Hello ${name}`}
      subtitle="What are you looking for?"
      rightTopIconOnPress={() => setModalVisible(true)}
      image={{ uri: `http://134.209.239.1${image}` }}
    />
  );
};

export default ParallaxComponent;
