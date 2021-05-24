import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Mid = ({ pp }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: `http://134.209.239.1${pp}` }}
      />
      <View style={styles.infoContainer}>
        <Text style={{ fontSize: 16, color: "#3A3A3C", fontWeight: "600" }}>
          Support
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginHorizontal: 5,
            fontWeight: "100",
            color: "#3A3A3C",
          }}
        >
          |
        </Text>
        <Text style={{ fontSize: 12, color: "#3A3A3C" }}>Local Mate</Text>
      </View>
    </View>
  );
};

export default Mid;

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#eee",
    marginRight: 10,
  },
  infoContainer: { flexDirection: "row", alignItems: "center" },
});
