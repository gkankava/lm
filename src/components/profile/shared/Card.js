import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const height = Dimensions.get("screen").height;

const Card = ({ img, title, opt, price }) => {
  const navigation = useNavigation();
  const list = opt.map((item, key) => {
    return (
      <View style={styles.itemContainer} key={key}>
        {item.status ? (
          <Feather name="check" size={19} color="#E5E5E5" />
        ) : (
          <Feather name="x" size={19} color="#F3BFBF" />
        )}
        <Text style={styles.itemTitle}>{item.title}</Text>
      </View>
    );
  });

  const goToCheckout = () => {
    let transcript = {
      title,
      opt,
      price,
    };
    navigation.navigate("Checkout", transcript);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={goToCheckout}>
      <Image resizeMode="contain" style={styles.img} source={img} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        {title === "traveller" && (
          <Text
            style={{
              color: "#FB3603",
              fontSize: 12,
              borderWidth: 1,
              borderColor: "#FB3603",
              paddingHorizontal: 8,
              paddingVertical: 1,
              borderRadius: 10,
            }}
          >
            popular
          </Text>
        )}
      </View>
      <View style={styles.optContainer}>{list}</View>
      <Text
        style={{
          fontSize: 14,
          color: "#A5A5A5",
          alignSelf: "center",
          fontWeight: "600",
        }}
      >
        Buy Now
      </Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${price.substr(0, price.indexOf("."))}</Text>
        <Text style={{ fontSize: 16, color: "white", fontWeight: "600" }}>
          {price.substr(price.indexOf(".") + 1, 4)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 40,
    paddingHorizontal: 30,
    paddingTop: 30,
    marginTop: 20,
    paddingBottom: 14,
    position: "relative",
    overflow: "hidden",
  },
  img: { alignSelf: "center", height: "47%", width: "80%" },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 12,
  },
  title: { fontSize: 24, fontWeight: "600", color: "#A5A5A5", marginRight: 10 },
  optContainer: { flexGrow: 1 },
  itemContainer: { flexDirection: "row", marginBottom: 8 },
  itemTitle: { marginLeft: 8, fontSize: 13, color: "#A5A5A5" },
  priceContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: 12,
    paddingHorizontal: 17,
    paddingBottom: 8,
    backgroundColor: "#59EDEC",
    borderTopLeftRadius: 50,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  price: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
    position: "relative",
  },
});
