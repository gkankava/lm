import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const height = Dimensions.get("screen").height;

const NewCardHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.innerContainer}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back-ios" size={24} color="white" />
          <Text style={styles.btnText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.header}>Add New Card</Text>
        <View style={{ width: 55 }} />
      </View>
    </View>
  );
};

export default NewCardHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    height: height * 0.13,
    justifyContent: "center",
    paddingTop: 30,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnText: { color: "white", fontSize: 14, fontWeight: "700" },
  header: { color: "white", fontSize: 16, fontWeight: "700" },
});
