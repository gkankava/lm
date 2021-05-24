import React from "react";
import { View, Text } from "react-native";

const ImageDescription = ({
  title = "Mount Ushba",
  place = "Georgia",
  direction = "right",
}) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: direction === "right" ? "flex-end" : "flex-start",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 8,
        }}
      >
        <View
          style={{
            width: 4,
            height: 4,
            borderRadius: 2,
            backgroundColor: "white",
          }}
        />
        <View
          style={{
            marginRight: 4,
            marginLeft: 4,
            width: 6,
            height: 6,
            borderRadius: 3,
            backgroundColor: "white",
          }}
        />
        <View
          style={{
            width: 4,
            height: 4,
            borderRadius: 2,
            backgroundColor: "white",
          }}
        />
      </View>
      <Text
        style={{
          color: "white",
          fontSize: 12,
          fontWeight: "800",
          marginBottom: 3,
        }}
      >
        {title}
      </Text>
      <Text style={{ color: "white", fontSize: 10, fontWeight: "500" }}>
        {place}
      </Text>
    </View>
  );
};

export default ImageDescription;
