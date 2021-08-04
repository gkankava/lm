import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { EvilIcons } from "@expo/vector-icons";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

const CardsSlider = ({
  fetchedCards = [{ name: "Jorj Knk", num: "**** 4879" }],
  navigation,
}) => {
  const [state, setState] = useState({ editable: false, el: null });

  let list = fetchedCards.map((item, key) => (
    <TouchableOpacity
      activeOpacity={0.8}
      key={key}
      onPress={() => {
        setState({ editable: false, el: null });
      }}
    >
      <View style={{}}>
        <LinearGradient
          start={[0, 0]}
          end={[1, 1]}
          style={{
            ...styles.card,
            padding: 20,
            position: "relative",
          }}
          colors={["#70FFAE", "#85C8D5"]}
        >
          <View>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subTitle}>{item.num}</Text>
          </View>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  ));
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {list}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate("NewCard");
          }}
        >
          <View
            style={[
              styles.card,
              {
                borderWidth: 1,
                borderStyle: "dashed",
                borderColor: "#E5E5E5",
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
          >
            <Text
              style={[
                styles.subTitle,
                { color: "#E5E5E5", fontWeight: "300", fontSize: 50 },
              ]}
            >
              +
            </Text>
            <Text
              style={[styles.title, { color: "#E5E5E5", fontWeight: "400" }]}
            >
              Add Card
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CardsSlider;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  card: {
    height: 200,
    width: 190,
    borderRadius: 15,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginLeft: 30,
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    padding: 30,
  },
  title: { fontSize: 18, fontWeight: "bold", color: "white", marginBottom: 8 },
  subTitle: { fontSize: 15, fontWeight: "400", color: "white" },
});
