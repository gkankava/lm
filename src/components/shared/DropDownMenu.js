import React from "react";
import { View, TouchableOpacity } from "react-native";

const DropDownMenu = () => {
  return (
    <TouchableOpacity>
      <View
        style={{
          height: 11,
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <View
          style={{
            height: 3,
            width: 26,
            backgroundColor: "white",
            borderRadius: 3,
          }}
        />
        <View
          style={{
            height: 3,
            width: 18,
            backgroundColor: "white",
            borderRadius: 3,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default DropDownMenu;
