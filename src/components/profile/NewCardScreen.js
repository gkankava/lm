import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import NewCardHeader from "./comp/NewCardHeader";
import CardForm from "./shared/CardForm";

const NewCardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={[0, 0]}
        end={[1, 1]}
        colors={["#8AC89B", "#94C936"]}
      >
        <NewCardHeader navigation={navigation} />
        <CardForm navigation={navigation} />
      </LinearGradient>
    </View>
  );
};

export default NewCardScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
